1. Create 3 new wizards and make sure you can view their name, house, and patronus information.

mutation {
    Kevin: addWizard(name: "Kevin Lu", houseId: 1, patronusId: 8) {
        id,
        name,
        house {
            name
        },
        patronus {
            form
        }
    },
    Don: addWizard(name: "Don S", houseId: 4, patronusId: 2 ) {
        id, 
        name, 
        house {
            name
        },
        patronus {
            form
        }
    },
    Potato: addWizard(name: "Potato", houseId: 2, patronusId: 2) {
        id,
        name,
        house {
            name
        },
        patronus {
            form
        }
    }
}

2. Edit the name of a wizard and verify that no other value has changed on that wizard.

mutation {
    updateWizard(id: 22, name: "Tomato") {
        id,
        name, 
        house {
            name
        },
        patronus {
            form
        }
    }
}

3. Edit the house id and patronus id of a wizard and verify their name did not change. (You'll need to provide an id for the wizard you'd like to mutate).
    mutation {
        updateWizard(id: 20, houseId: 2, patronusId: 9) {
            id,
            name,
            house {
                name
            },
            patronus {
                form
            }
        }
    }

4. Delete two wizards (just make sure you are deleting wizards who exist! You can query the wizards root type for a list of all wizards.)

    mutation {
        Kevin: deleteWizard(id:20) {
            name
        },
        Don: deleteWizard(id: 21) {
            name
        }
    }

