db.createUser(
        {
            user: "borelanjo",
            pwd: "pos",
            roles: [
                {
                    role: "readWrite",
                    db: "pos"
                }
            ]
        }
);