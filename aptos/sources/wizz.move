module wizz_addr::wizz {

    use std::string::{String, length};
    use std::vector;
    use aptos_std::table::{Self, Table};
    use aptos_framework::signer;
    use aptos_framework::object;


    // Struct to represent a user profile.
    struct Profile has key {
        profile_id: address,
        username: String,
        full_name: String,
        owner: address,
        bio: String,
        profile_image_ref: String,
        followings: vector<address>
    }

    // Global table to store all usernames.
    struct UsernameTable has key {
       usernames: vector<String>,
    }

    // Global table to store all profiles.
    struct ProfileTable has key {
        profile_addresses: vector<address>,
    }

    const NAME: vector<u8> = b"MyAwesomeObject";

    // Initialize the ProfileTable. This should be called once during deployment.
    public entry fun init(account: &signer) {
        let profile_table = ProfileTable {
            profile_addresses: vector::empty<address>(),
        };
        let username_table = UsernameTable {
            usernames: vector::empty<String>(),
        };
        move_to(account, profile_table);
        move_to(account, username_table);
    }

    // Initialize a new profile.
    public entry fun create_profile(username: String, full_name: String, bio:String, profile_image_ref:String, account: &signer) {

        assert!(length(&username) > 0, 01);
        assert!(length(&full_name) > 0, 02);
        assert!(length(&bio) > 0, 03);
        assert!(length(&profile_image_ref) > 0, 04);
        //assert!(vector::contains(&username_table.usernames, &username) == false, 05);

        let signer_address = signer::address_of(account);
        let profile_Table = borrow_global_mut<ProfileTable>(signer_address);
        let username_table = borrow_global_mut<UsernameTable>(signer_address);

        // let profile_uid = object::new(ctx);
        // let profile_id = object::uid_to_address(&profile_uid);
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

        vector::push_back(&mut profile_table.profile_addresses, profile_id);
        vector::push_back(&mut username_table.usernames, username);
        move_to(account, profile);
    }

}
