export interface Recommendations {
    "accounts": [{
        "name": "Reka",
        "age": 34,
        "spokenLanguages": [
            "HUNGARIAN"
        ],
        "school": "BGF",
        "subject": {
            "serviceType": "DEMAND",
            "address": {
                "display": "Budapest, XVIII. kerület",
            },
            "roomType": "SHARED",
            "client": {
                "moveIntoAt": "2019-01-28T18:52:51.133Z",
            },
            "price": {
                "currency": "HUF",
                "min": 120000,
                "max": 150000,
                "billsIncluded": true
            }
        }
    }];
}

export interface Profile {
    "name": "Tomi",
    "avatar": "data uri scheme...",
    "introduction": "Lorem ipsum",
    "birthday": "1991-01-31T19:06:14.430Z",
    "gender": "MALE",
    "nationality": "HU",
    "qualification": "UNIVERSITY",
    "hasErasmus": false,
    "spokenLanguages": [
        "ENGLISH",
    ],
    "moveIntoAt": "IMMEDIATELY",
    "school": "BGE",
    "profession": "engineer",
    "children": 0,
    "pets": 0,
    "smoking": true,
    "leaveOnWeekends": true,
    "personality": "gentleman",
    "subject": {
        "serviceType": "DEMAND",
        "roomType": "SHARED",
        "address": {
            "city": "Budapest",
            "postalCode": "1083",
            "district?": "8",
            "county?": "Pest",
            "country": "Magyarország",
            "street": "Kőfejtő",
            "number": "17",
            "googleAddress": "1083 Budapest, Kőfejtő utca 17.",
            "display": "1083 Budapest, Kőfejtő utca 17."
        },
        "pictures": [{
            "data": "data uri scheme...",
            "label": "Konyha"
        }]
        "description": "Lorem ipsum",
        "price": {
            "fee": 15000,
            "min": 80000,
            "max": 130000,
            "billsIncluded": false,
            "caution": 3,
            "currency": "HUF"
        },
        "floorArea": 54,
        "roomArea": 32,
        "innerHeight": 3,
        "client": {
            "gender": "MALE",
            "nationality": "HU",
            "qualification": "UNIVERSITY",
            "hasErasmus": false,
        },
        "furnished": "FULLY",
        "building": "BRICK",
        "condition": "MODERN",
        "residents": 2,
        "roomMates": 1,
        "floors": "2",
        "details": {
            "lift": true,
            "washingMachine": true,
            "smokingArea": true,
            "balcony": true,
            "gym": true,
            "accessible": true,
            "petsAllowed": true,
            "television": true,
            "internet": true,
            "garage": true,
            "jakuzzi": false,
            "airConditioner": true,
            "privateBathroom": true,
            "parking": true,
            "shortPeriod": true
        },
    }
}
