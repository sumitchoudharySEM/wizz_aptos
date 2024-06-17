module wizz_addr::wizz {

    use std::string::{String, length};
    use std::vector;
    use aptos_framework::signer;
    use aptos_framework::object;
    use aptos_std::table::{Self, Table};

    struct Profile has key, store {
        profile_id: address,
        username: String,
        full_name: String,
        owner: address,
        bio: String,
        profile_image_ref: String,
        followings: vector<address>
    }

    struct Post has  store, copy, drop{
        post_id : u64,
        owner : address,
        content : String,
        image_ref : String,
        likes : u64,
    }

    struct UsernameTable has key {
       usernames: vector<String>,
    }

    struct ProfileTable has key {
        profile_addresses: vector<address>,
    }

    struct PostTable has key {
        posts: Table<u64, Post>,
        post_counter : u64,
    }

    const NAME: vector<u8> = b"Object";

    public entry fun init(account: &signer) {
        let profile_table = ProfileTable {
            profile_addresses: vector::empty<address>(),
        };
        let username_table = UsernameTable {
            usernames: vector::empty<String>(),
        };
        let post_table = PostTable {
            posts: table::new(),
            post_counter: 0,
        };
        move_to(account, profile_table);
        move_to(account, username_table);
        move_to(account, post_table);
    }

    public entry fun create_profile(account: &signer, contract_owner: address, username: String, full_name: String, bio:String, profile_image_ref:String ) acquires UsernameTable, ProfileTable {

        assert!(length(&username) > 0, 01);
        assert!(length(&full_name) > 0, 02);
        assert!(length(&bio) > 0, 03);
        assert!(length(&profile_image_ref) > 0, 04);
        //assert!(vector::contains(&username_table.usernames, &username) == false, 05);

        let signer_address = signer::address_of(account);
        let profile_table = borrow_global_mut<ProfileTable>(contract_owner);
        let username_table = borrow_global_mut<UsernameTable>(contract_owner);

        let profile_id = object::create_object_address(&signer_address, NAME );

        let profile: Profile = Profile {
            profile_id: profile_id,
            username,
            full_name,
            owner: signer_address,
            profile_image_ref,
            bio,
            followings: vector::empty<address>(),
        };

        vector::push_back(&mut profile_table.profile_addresses, signer_address);
        vector::push_back(&mut username_table.usernames, username);
        move_to(account, profile);
    }

    public entry fun follow_profile(account: &signer, profile_to_follow: address) acquires Profile {
        let follower_address = signer::address_of(account);
        let profile = borrow_global_mut<Profile>(follower_address);
        vector::push_back(&mut profile.followings, profile_to_follow);
    }

    public entry fun unfollow_profile(account: &signer, profile_to_unfollow: address) acquires Profile {
        let follower_address = signer::address_of(account);
        let profile = borrow_global_mut<Profile>(follower_address);
        let followings = &mut profile.followings;

        let len = vector::length(followings);
        let i = 0;
        while (i < len) {
            if (vector::borrow(followings, i) == &profile_to_unfollow) {
                vector::remove(followings, i);
                break
            };
            i = i + 1;
        };
    }

    public entry fun create_post(account: &signer, contract_owner: address, content: String, image_ref: String) acquires PostTable {
        assert!(length(&content) > 0, 05);

        let post_table = borrow_global_mut<PostTable>(contract_owner);
        let post_counter = post_table.post_counter;
        let post_id = post_counter + 1;

        let post: Post = Post {
            post_id,
            owner: signer::address_of(account),
            content,
            image_ref,
            likes: 0,
        };

        table::upsert(&mut post_table.posts, post_id, post);
        post_table.post_counter = post_id;
    }

    public entry fun like_post( contract_owner: address, post_id: u64) acquires PostTable {
        let post_table = borrow_global_mut<PostTable>(contract_owner);
        let post = table::borrow_mut(&mut post_table.posts, post_id);
        post.likes = post.likes + 1;
    }

}
