export default class ProductService {

    getSupplyHistory() {
        return fetch('demo/data/supply-history.json').then(res => res.json()).then(d => d.data);
    }
    getCapacityHistory() {
        return fetch('demo/data/capacity-history.json').then(res => res.json()).then(d => d.data);
    }
    getDemandHistory() {
        return fetch('demo/data/demand-history.json').then(res => res.json()).then(d => d.data);
    }
    getProductsSmall() {
        return fetch('demo/data/products-small.json').then(res => res.json()).then(d => d.data);
    }

    getProducts() {
        return fetch('demo/data/products.json').then(res => res.json()).then(d => d.data);
    }
    getProductsWithOrdersSmall() {
        return fetch('demo/data/products-orders-small.json').then(res => res.json()).then(d => d.data);
    }
    getSubscriptions() {
        return fetch('demo/data/subscriptions.json').then(res => res.json()).then(d => d.data);
    }
    getCompanies() {
        return {"content":[{"id":1,"name":"IND Hemp LLC","phoneNumber":null,"website":null,"type":[],"latitude":null,"longitude":null,"createdAt":null,"updatedAt":null,"approvalStatus":null,"enabled":false,"owner":null,"farmerAttributes":{"id":1,"licenseType":"USDA Producer","licenseIssueDate":"2022-09-04T00:00:00.000+00:00","licenseStatus":"ACTIVE","licenseNumber":"USDA_C56206_0001","hempVariety":null,"bales":null,"hempType":null,"certificationBy":null,"ownTrucking":false,"balesAvailable":0,"weightPerBale":0,"previousCrop":null,"seedingRate":0,"rowSpaceInches":0,"pesticidesUsed":null,"weatherInGeneral":null,"fertilizerUsed":null,"estimatedWeeds":null},"manufacturesAttributes":null,"processorAttributes":null,"addresses":[{"id":1,"addressOne":null,"addressTwo":null,"city":null,"state":"Montana","zipcode":"59442","country":"United States","primaryAddress":null}]},{"id":2,"name":"Craig Schmitt","phoneNumber":null,"website":null,"type":["FARMER"],"latitude":null,"longitude":null,"createdAt":"2023-04-04T15:42:01.197+00:00","updatedAt":"2023-04-04T15:42:01.197+00:00","approvalStatus":null,"enabled":false,"owner":null,"farmerAttributes":{"id":2,"licenseType":"USDA Producer","licenseIssueDate":"2023-05-04T00:00:00.000+00:00","licenseStatus":"ACTIVE","licenseNumber":"USDA_C56206_0002","hempVariety":null,"bales":null,"hempType":null,"certificationBy":null,"ownTrucking":false,"balesAvailable":0,"weightPerBale":0,"previousCrop":null,"seedingRate":0,"rowSpaceInches":0,"pesticidesUsed":null,"weatherInGeneral":null,"fertilizerUsed":null,"estimatedWeeds":null},"manufacturesAttributes":null,"processorAttributes":null,"addresses":[{"id":2,"addressOne":null,"addressTwo":null,"city":null,"state":"Montana","zipcode":"59201","country":"United States","primaryAddress":null}]},{"id":3,"name":"Olfert Cattle Company","phoneNumber":null,"website":null,"type":["FARMER"],"latitude":null,"longitude":null,"createdAt":"2023-04-04T15:42:01.797+00:00","updatedAt":"2023-04-04T15:42:01.797+00:00","approvalStatus":null,"enabled":false,"owner":null,"farmerAttributes":{"id":3,"licenseType":"USDA Producer","licenseIssueDate":"2021-07-06T00:00:00.000+00:00","licenseStatus":"ACTIVE","licenseNumber":"USDA_C56206_0003","hempVariety":null,"bales":null,"hempType":null,"certificationBy":null,"ownTrucking":false,"balesAvailable":0,"weightPerBale":0,"previousCrop":null,"seedingRate":0,"rowSpaceInches":0,"pesticidesUsed":null,"weatherInGeneral":null,"fertilizerUsed":null,"estimatedWeeds":null},"manufacturesAttributes":null,"processorAttributes":null,"addresses":[{"id":3,"addressOne":null,"addressTwo":null,"city":null,"state":"Montana","zipcode":"59225","country":"United States","primaryAddress":null}]},{"id":4,"name":"Randal Reddig","phoneNumber":null,"website":null,"type":["FARMER"],"latitude":null,"longitude":null,"createdAt":"2023-04-04T15:42:02.287+00:00","updatedAt":"2023-04-04T15:42:02.287+00:00","approvalStatus":null,"enabled":false,"owner":null,"farmerAttributes":{"id":4,"licenseType":"USDA Producer","licenseIssueDate":"2022-03-06T00:00:00.000+00:00","licenseStatus":"ACTIVE","licenseNumber":"USDA_C56206_0004","hempVariety":null,"bales":null,"hempType":null,"certificationBy":null,"ownTrucking":false,"balesAvailable":0,"weightPerBale":0,"previousCrop":null,"seedingRate":0,"rowSpaceInches":0,"pesticidesUsed":null,"weatherInGeneral":null,"fertilizerUsed":null,"estimatedWeeds":null},"manufacturesAttributes":null,"processorAttributes":null,"addresses":[{"id":4,"addressOne":null,"addressTwo":null,"city":null,"state":"Montana","zipcode":"59201","country":"United States","primaryAddress":null}]},{"id":5,"name":"Stentoft & Sons LLC","phoneNumber":null,"website":null,"type":["FARMER"],"latitude":null,"longitude":null,"createdAt":"2023-04-04T15:42:02.796+00:00","updatedAt":"2023-04-04T15:42:02.796+00:00","approvalStatus":null,"enabled":false,"owner":null,"farmerAttributes":{"id":5,"licenseType":"USDA Producer","licenseIssueDate":"2022-01-07T00:00:00.000+00:00","licenseStatus":"ACTIVE","licenseNumber":"USDA_C56206_0005","hempVariety":null,"bales":null,"hempType":null,"certificationBy":null,"ownTrucking":false,"balesAvailable":0,"weightPerBale":0,"previousCrop":null,"seedingRate":0,"rowSpaceInches":0,"pesticidesUsed":null,"weatherInGeneral":null,"fertilizerUsed":null,"estimatedWeeds":null},"manufacturesAttributes":null,"processorAttributes":null,"addresses":[{"id":5,"addressOne":null,"addressTwo":null,"city":null,"state":"Montana","zipcode":"59255","country":"United States","primaryAddress":null}]},{"id":6,"name":"Renika Love","phoneNumber":null,"website":null,"type":["FARMER"],"latitude":null,"longitude":null,"createdAt":"2023-04-04T15:42:03.273+00:00","updatedAt":"2023-04-04T15:42:03.273+00:00","approvalStatus":null,"enabled":false,"owner":null,"farmerAttributes":{"id":6,"licenseType":"USDA Producer","licenseIssueDate":"2021-10-11T00:00:00.000+00:00","licenseStatus":"ACTIVE","licenseNumber":"USDA_F53417_0001","hempVariety":null,"bales":null,"hempType":null,"certificationBy":null,"ownTrucking":false,"balesAvailable":0,"weightPerBale":0,"previousCrop":null,"seedingRate":0,"rowSpaceInches":0,"pesticidesUsed":null,"weatherInGeneral":null,"fertilizerUsed":null,"estimatedWeeds":null},"manufacturesAttributes":null,"processorAttributes":null,"addresses":[{"id":6,"addressOne":null,"addressTwo":null,"city":null,"state":"Minnesota","zipcode":"55771","country":"United States","primaryAddress":null}]},{"id":7,"name":"1 Love Hemp LLC","phoneNumber":null,"website":null,"type":["FARMER"],"latitude":null,"longitude":null,"createdAt":"2023-04-04T15:42:03.755+00:00","updatedAt":"2023-04-04T15:42:03.755+00:00","approvalStatus":null,"enabled":false,"owner":null,"farmerAttributes":{"id":7,"licenseType":"USDA Producer","licenseIssueDate":"2021-02-06T00:00:00.000+00:00","licenseStatus":"ACTIVE","licenseNumber":"USDA_P13203_0001","hempVariety":null,"bales":null,"hempType":null,"certificationBy":null,"ownTrucking":false,"balesAvailable":0,"weightPerBale":0,"previousCrop":null,"seedingRate":0,"rowSpaceInches":0,"pesticidesUsed":null,"weatherInGeneral":null,"fertilizerUsed":null,"estimatedWeeds":null},"manufacturesAttributes":null,"processorAttributes":null,"addresses":[{"id":7,"addressOne":null,"addressTwo":null,"city":null,"state":"Montana","zipcode":"59860","country":"United States","primaryAddress":null}]},{"id":8,"name":"Flathead Lake Hemp","phoneNumber":null,"website":null,"type":["FARMER"],"latitude":null,"longitude":null,"createdAt":"2023-04-04T15:42:04.263+00:00","updatedAt":"2023-04-04T15:42:04.263+00:00","approvalStatus":null,"enabled":false,"owner":null,"farmerAttributes":{"id":8,"licenseType":"USDA Producer","licenseIssueDate":"2021-09-06T00:00:00.000+00:00","licenseStatus":"ACTIVE","licenseNumber":"USDA_P13203_0002","hempVariety":null,"bales":null,"hempType":null,"certificationBy":null,"ownTrucking":false,"balesAvailable":0,"weightPerBale":0,"previousCrop":null,"seedingRate":0,"rowSpaceInches":0,"pesticidesUsed":null,"weatherInGeneral":null,"fertilizerUsed":null,"estimatedWeeds":null},"manufacturesAttributes":null,"processorAttributes":null,"addresses":[{"id":8,"addressOne":null,"addressTwo":null,"city":null,"state":"Montana","zipcode":"59860","country":"United States","primaryAddress":null}]},{"id":9,"name":"Gail Byrne Baber","phoneNumber":null,"website":null,"type":["FARMER"],"latitude":null,"longitude":null,"createdAt":"2023-04-04T15:42:04.769+00:00","updatedAt":"2023-04-04T15:42:04.769+00:00","approvalStatus":null,"enabled":false,"owner":null,"farmerAttributes":{"id":9,"licenseType":"USDA Producer","licenseIssueDate":"2020-01-11T00:00:00.000+00:00","licenseStatus":"ACTIVE","licenseNumber":"USDA_15_0001","hempVariety":null,"bales":null,"hempType":null,"certificationBy":null,"ownTrucking":false,"balesAvailable":0,"weightPerBale":0,"previousCrop":null,"seedingRate":0,"rowSpaceInches":0,"pesticidesUsed":null,"weatherInGeneral":null,"fertilizerUsed":null,"estimatedWeeds":null},"manufacturesAttributes":null,"processorAttributes":null,"addresses":[{"id":9,"addressOne":null,"addressTwo":null,"city":null,"state":"Hawaii","zipcode":"96743","country":"United States","primaryAddress":null}]},{"id":10,"name":"TROPICAL SUNSET FARMS LLC","phoneNumber":null,"website":null,"type":["FARMER"],"latitude":null,"longitude":null,"createdAt":"2023-04-04T15:42:05.299+00:00","updatedAt":"2023-04-04T15:42:05.299+00:00","approvalStatus":null,"enabled":false,"owner":null,"farmerAttributes":{"id":10,"licenseType":"USDA Producer","licenseIssueDate":"2020-01-11T00:00:00.000+00:00","licenseStatus":"ACTIVE","licenseNumber":"USDA_15_0002","hempVariety":null,"bales":null,"hempType":null,"certificationBy":null,"ownTrucking":false,"balesAvailable":0,"weightPerBale":0,"previousCrop":null,"seedingRate":0,"rowSpaceInches":0,"pesticidesUsed":null,"weatherInGeneral":null,"fertilizerUsed":null,"estimatedWeeds":null},"manufacturesAttributes":null,"processorAttributes":null,"addresses":[{"id":10,"addressOne":null,"addressTwo":null,"city":null,"state":"Hawaii","zipcode":"96725","country":"United States","primaryAddress":null}]}],"pageable":{"sort":{"sorted":false,"unsorted":true,"empty":true},"pageNumber":0,"pageSize":10,"offset":0,"paged":true,"unpaged":false},"totalElements":1525,"totalPages":153,"last":false,"first":true,"numberOfElements":10,"sort":{"sorted":false,"unsorted":true,"empty":true},"size":10,"number":0,"empty":false}
    }
    getTotalTons() {
        return 55200;
    }
    getTotalAcres() {
        return 0;
    }
    getContractedTons() {
        return 5400;
    }
    getAvailableTons() {
        return 1200;
    }
    getAcresByRegion() {
        return {
            "West": 166,
            "Midwest": 543,
            "Alaska": 948,
            "Northeast": 341,
            "South": 944
          };
    }
    getAcresByGenetics() {
        return {
            "Fibror 79": 2.00,
            "MS77": 2.00,
            "New West Genetics: Abound 4113": 5.00,
            "New West Genetics: Abound 2463": 25.00,
            "Futura 75": 2.00,
            "Muka 76": 2.00,
            "Yuma": 12.00,
            "Bialobrzeskie": 25.00,
            "Yuma- S": 5.00,
            "test1": 2.00,
            "test2": 2.00,
            "test3": 5.00,
            "test4": 25.00,
            "test5": 2.00,
            "test6": 2.00,
            "test7": 12.00,
            "test8": 25.00,
        };
    }
    getTotalCapacity() {
        return {
            "Product Availability": 16002.03,
            "Product Under Contract": 200.00,
            "Daily Capacity": 7231.00,
            "Total Processors": 7
        }
    }
    getCapacityByRegion(){
        return {"Alaska":51.71,"Northeast":2350.00}
    }
    getCapacityByIndustry(){
        return {
            "HEAVY CONSTRUCTION OTHER THAN BLDG CONST - CONTRACTORS": 2350.00,
            "GOLD AND SILVER ORES": 51.71,
            "FORESTRY": 51.71,
            "BITUMINOUS COAL & LIGNITE MINING": 2350.00
        }
    }
    getCapacityByType(){
        return {"Grain":0.67,"Fiber":0.15}
    }
    getTotalDemand() {
        return {
            "netDemand": 63716,
            "totalDemand": 1512,
            "totalSupply": 65228
          }
    }
    getDemandByRegion(){
        return {
            "Alaska": 29,
            "Midwest": 77,
            "Northeast": 0,
            "West": 48,
            "Hawaii": 1512,
            "South": 0
          }
    }
    getDemandByIndustry(){
        return {
            "OIL & GAS FIELD SERVICES, NEC": 0,
            "MINING & QUARRYING OF NONMETALLIC MINERALS (NO FUELS)": 48,
            "PAPERBOARD MILLS": 29,
            "MILLWOOD, VENEER, PLYWOOD, & STRUCTURAL WOOD MEMBERS": 29,
            "FORESTRY": 48,
            "DRILLING OIL & GAS WELLS": 0,
            "OIL & GAS FIELD EXPLORATION SERVICES": 1512,
            "APPAREL & OTHER FINISHD PRODS OF FABRICS & SIMILAR MATL": 1512
          }
    }
    getDemandByType(){
        return {
            "HURD": 27,
            "Powder": 3,
            "Fiber": 1547
          }
    }
    getCompanyById() {
        return {
            "id": 21,
            "stripeCustomerId": null,
            "stripeConnectedAccId": null,
            "name": "Mauna Loa Farms, LLC",
            "phoneNumber": "3013183388",
            "website": "maunaloafarms.com",
            "balance": null,
            "totalRevenue": null,
            "type": [
              "MANUFACTURER"
            ],
            "latitude": null,
            "longitude": null,
            "createdAt": "2023-04-04T15:42:11.024+00:00",
            "updatedAt": "2023-04-04T15:42:11.024+00:00",
            "approvalStatus": null,
            "enabled": false,
            "ownerId": null,
            "farmerAttributes": {
              "id": 1557,
              "licenseType": null,
              "licenseIssueDate": null,
              "licenseStatus": null,
              "licenseNumber": null,
              "descriptionOfFarm": null,
              "hempVariety": null,
              "bales": null,
              "hempType": null,
              "certificationBy": null,
              "ownTrucking": false,
              "balesAvailable": 0,
              "weightPerBale": 0,
              "previousCrop": null,
              "seedingRate": 0,
              "rowSpaceInches": 0,
              "pesticidesUsed": null,
              "weatherInGeneral": null,
              "fertilizerUsed": null,
              "estimatedWeeds": null,
              "totalAcreForGrowingIHemp": null,
              "totalAcreCurrentlyUnderContract": null,
              "region": null
            },
            "manufacturesAttributes": {
              "id": 1593,
              "targetTypeOfOutput": null,
              "descriptionOfManufacturer": null,
              "deliverySchedule": null,
              "regions": null
            },
            "processorAttributes": {
              "id": 1577,
              "totalCapacityPerDayInTons": 5,
              "numberOfShiftsBeingUsed": 2,
              "annualTonsUnderContract": 156,
              "totalAnnualTonsAvailableToMarket": 5415,
              "regions": [],
              "baleTypePreferred": null,
              "targetTypeOfOutput": null,
              "siteUtilization": null,
              "descriptionOfProcessing": null,
              "supportedIndustries": []
            },
            "specRequests": [
                {
                    "id": 7547,
                    "name": "test spec request",
                    "company_id": 1609,
                    "company_name": "Orbit Manufacturing Inc",
                    "genetics": [],
                    "type": "HURD",
                    "hurdContentPercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "fmPercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "dustPercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "lengthMM": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "diameterMM": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "moisturePercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "color": "none",
                    "powder": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "microns": 0,
                    "grade": "fine",
                    "categoryOfLength": "",
                    "process": "raw",
                    "mold": {
                        "lessThan": 0.0,
                        "moreThan": 1.0,
                        "between": []
                    },
                    "unopenedStraps": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "budget": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "shippingContainer": "",
                    "shippingPackage": null,
                    "shippingInstruction": "",
                    "archived": false,
                    "deleted": false,
                    "productMatches": [],
                    "quantityInLbs": 30,
                    "totalAnnualLbsRequired": 0,
                    "totalAnnualLbsUnderContract": 15,
                    "createdAt": "2023-06-06T04:12:56.220+00:00",
                    "updatedAt": "2023-06-06T04:12:56.220+00:00",
                    "supportedIndustries": null
                },
              {
                "id": 1542,
                "name": null,
                "company_id": 21,
                "company_name": null,
                "genetics": [
                  "TBD"
                ],
                "type": null,
                "hurdContentPercentage": {
                  "lessThan": 1,
                  "moreThan": 0,
                  "between": [
                    0,
                    1
                  ]
                },
                "fmPercentage": {
                  "lessThan": 1,
                  "moreThan": 0,
                  "between": [
                    0,
                    1
                  ]
                },
                "dustPercentage": {
                  "lessThan": 3,
                  "moreThan": 0,
                  "between": [
                    0,
                    3
                  ]
                },
                "lengthMM": {
                  "lessThan": 100,
                  "moreThan": 155,
                  "between": [
                    155,
                    100
                  ]
                },
                "diameterMM": {
                  "lessThan": 10,
                  "moreThan": 0,
                  "between": [
                    0,
                    10
                  ]
                },
                "moisturePercentage": {
                  "lessThan": 12,
                  "moreThan": 0,
                  "between": [
                    0,
                    12
                  ]
                },
                "color": null,
                "powder": {
                  "lessThan": 0,
                  "moreThan": 0,
                  "between": [
                    0
                  ]
                },
                "microns": 0,
                "grade": null,
                "categoryOfLength": "70mm - 150mm",
                "process": "degummed",
                "mold": null,
                "unopenedStraps": {
                  "lessThan": 0,
                  "moreThan": 0,
                  "between": [
                    0
                  ]
                },
                "budget": null,
                "shippingContainer": "Pallet",
                "shippingPackage": "sachs",
                "shippingInstruction": "test",
                "archived": false,
                "deleted": true,
                "productMatches": null,
                "quantityInLbs": null,
                "totalAnnualLbsRequired": null,
                "totalAnnualLbsUnderContract": null,
                "createdAt": null,
                "updatedAt": null,
                "supportedIndustries": null
              },
              {
                "id": 1570,
                "name": "string",
                "company_id": 21,
                "company_name": null,
                "genetics": [
                  "TBD"
                ],
                "type": "Fiber",
                "hurdContentPercentage": {
                  "lessThan": 3,
                  "moreThan": 0,
                  "between": [
                    0,
                    3
                  ]
                },
                "fmPercentage": {
                  "lessThan": 0,
                  "moreThan": 0,
                  "between": []
                },
                "dustPercentage": {
                  "lessThan": 5,
                  "moreThan": 0,
                  "between": [
                    0,
                    5
                  ]
                },
                "lengthMM": {
                  "lessThan": 155,
                  "moreThan": 0,
                  "between": [
                    0,
                    155
                  ]
                },
                "diameterMM": {
                  "lessThan": 33,
                  "moreThan": 0,
                  "between": [
                    0,
                    33
                  ]
                },
                "moisturePercentage": {
                  "lessThan": 5,
                  "moreThan": 0,
                  "between": [
                    0,
                    5
                  ]
                },
                "color": "some",
                "powder": {
                  "lessThan": 10,
                  "moreThan": 0,
                  "between": [
                    0,
                    10
                  ]
                },
                "microns": 0,
                "grade": "fine",
                "categoryOfLength": "long",
                "process": "raw",
                "mold": null,
                "unopenedStraps": {
                  "lessThan": 0,
                  "moreThan": 0,
                  "between": []
                },
                "budget": {
                  "lessThan": 200000,
                  "moreThan": 0,
                  "between": [
                    0,
                    200000
                  ]
                },
                "shippingContainer": "Water tight",
                "shippingPackage": "sachs",
                "shippingInstruction": "Will be provided on contract ",
                "archived": true,
                "deleted": true,
                "productMatches": [],
                "quantityInLbs": 25000,
                "totalAnnualLbsRequired": 50000,
                "totalAnnualLbsUnderContract": 18000,
                "createdAt": null,
                "updatedAt": null,
                "supportedIndustries": null
              },
              {
                "id": 1578,
                "name": "Car Panels",
                "company_id": 21,
                "company_name": null,
                "genetics": [],
                "type": "Fiber",
                "hurdContentPercentage": {
                  "lessThan": 4,
                  "moreThan": 0,
                  "between": []
                },
                "fmPercentage": {
                  "lessThan": 0,
                  "moreThan": 0,
                  "between": []
                },
                "dustPercentage": {
                  "lessThan": 10,
                  "moreThan": 0,
                  "between": []
                },
                "lengthMM": {
                  "lessThan": 0,
                  "moreThan": 0,
                  "between": [
                    75,
                    155
                  ]
                },
                "diameterMM": {
                  "lessThan": 0,
                  "moreThan": 0,
                  "between": []
                },
                "moisturePercentage": {
                  "lessThan": 12,
                  "moreThan": 0,
                  "between": []
                },
                "color": "some",
                "powder": {
                  "lessThan": 3,
                  "moreThan": 0,
                  "between": []
                },
                "microns": 0,
                "grade": "cottonized",
                "categoryOfLength": "short",
                "process": "degummed",
                "mold": null,
                "unopenedStraps": {
                  "lessThan": 0,
                  "moreThan": 0,
                  "between": []
                },
                "budget": {
                  "lessThan": 0,
                  "moreThan": 0,
                  "between": [
                    200000,
                    350000
                  ]
                },
                "shippingContainer": "Water tight",
                "shippingPackage": "sachs",
                "shippingInstruction": "Ship in Pallets",
                "archived": false,
                "deleted": false,
                "productMatches": [],
                "quantityInLbs": 0,
                "totalAnnualLbsRequired": 300000,
                "totalAnnualLbsUnderContract": 0,
                "createdAt": "2023-05-26T13:43:29.884+00:00",
                "updatedAt": "2023-05-26T13:43:29.884+00:00",
                "supportedIndustries": null
              },
              {
                "id": 1574,
                "name": "Spec for Fiber for Product Z",
                "company_id": 21,
                "company_name": null,
                "genetics": [],
                "type": "Fiber",
                "hurdContentPercentage": {
                  "lessThan": 2,
                  "moreThan": 0,
                  "between": [
                    0,
                    2
                  ]
                },
                "fmPercentage": {
                  "lessThan": 0,
                  "moreThan": 0,
                  "between": []
                },
                "dustPercentage": {
                  "lessThan": 3,
                  "moreThan": 0,
                  "between": [
                    0,
                    3
                  ]
                },
                "lengthMM": {
                  "lessThan": 155,
                  "moreThan": 0,
                  "between": [
                    0,
                    155
                  ]
                },
                "diameterMM": {
                  "lessThan": 0,
                  "moreThan": 0,
                  "between": []
                },
                "moisturePercentage": {
                  "lessThan": 5,
                  "moreThan": 0,
                  "between": [
                    0,
                    5
                  ]
                },
                "color": "none",
                "powder": {
                  "lessThan": 5,
                  "moreThan": 0,
                  "between": [
                    0,
                    5
                  ]
                },
                "microns": 0,
                "grade": "chips",
                "categoryOfLength": "long",
                "process": "commed",
                "mold": null,
                "unopenedStraps": {
                  "lessThan": 10,
                  "moreThan": 0,
                  "between": [
                    0,
                    10
                  ]
                },
                "budget": {
                  "lessThan": 1,
                  "moreThan": 0,
                  "between": [
                    0,
                    1
                  ]
                },
                "shippingContainer": "Water tight",
                "shippingPackage": "sachs",
                "shippingInstruction": "Ship on pallets and bales",
                "archived": false,
                "deleted": false,
                "productMatches": [],
                "quantityInLbs": 3000000,
                "totalAnnualLbsRequired": 3500000,
                "totalAnnualLbsUnderContract": 1500000,
                "createdAt": "2023-05-25T22:45:02.153+00:00",
                "updatedAt": "2023-05-25T22:45:02.153+00:00",
                "supportedIndustries": null
              },
              {
                "id": 1591,
                "name": "Hurd for Hempcrete",
                "company_id": 21,
                "company_name": null,
                "genetics": [],
                "type": "HURD",
                "hurdContentPercentage": {
                  "lessThan": 5,
                  "moreThan": 0,
                  "between": []
                },
                "fmPercentage": {
                  "lessThan": 0,
                  "moreThan": 0,
                  "between": []
                },
                "dustPercentage": {
                  "lessThan": 10,
                  "moreThan": 0,
                  "between": []
                },
                "lengthMM": {
                  "lessThan": 0,
                  "moreThan": 0,
                  "between": []
                },
                "diameterMM": {
                  "lessThan": 0,
                  "moreThan": 0,
                  "between": []
                },
                "moisturePercentage": {
                  "lessThan": 10,
                  "moreThan": 0,
                  "between": []
                },
                "color": "some",
                "powder": {
                  "lessThan": 5,
                  "moreThan": 0,
                  "between": []
                },
                "microns": 0,
                "grade": "chips",
                "categoryOfLength": "short",
                "process": "raw",
                "mold": null,
                "unopenedStraps": {
                  "lessThan": 5,
                  "moreThan": 0,
                  "between": []
                },
                "budget": {
                  "lessThan": null,
                  "moreThan": 0,
                  "between": [
                    500,
                    1000
                  ]
                },
                "shippingContainer": "Water tight",
                "shippingPackage": "sachs",
                "shippingInstruction": "contact ",
                "archived": false,
                "deleted": false,
                "productMatches": [],
                "quantityInLbs": 150,
                "totalAnnualLbsRequired": 500,
                "totalAnnualLbsUnderContract": 400,
                "createdAt": "2023-05-26T16:18:02.426+00:00",
                "updatedAt": "2023-05-26T16:18:02.426+00:00",
                "supportedIndustries": null
              }
            ],
            "addresses": [
              {
                "id": 1553,
                "addressOne": "8113 Ventnor Rd",
                "addressTwo": "",
                "city": "Pasadena",
                "state": "Hawaii",
                "zipcode": "21122",
                "country": "",
                "primaryAddress": true
              }
            ]
          }
    }
    fetchPendingOwners() {
        return {
            "content": [
                {
                    "id": 4,
                    "user": {
                        "id": 14,
                        "stripeCustomerId": null,
                        "firstName": "Duane",
                        "lastName": "Shugars",
                        "email": "dshugars@hempkatalyst.com",
                        "ip": "108.3.173.61",
                        "phoneNumber": "3013183388",
                        "approvalStatus": "PENDING",
                        "roles": [
                            "COMPANY_ADMIN",
                            "OWNER",
                            "ADMIN"
                        ],
                        "createdDate": "2023-06-09T14:55:17.513+00:00",
                        "lastModified": "2023-06-30T20:10:49.608+00:00",
                        "lastLogin": "2023-06-23T18:44:45.589+00:00",
                        "enabled": true,
                        "trialDaysRemaining": null,
                        "permissions": {},
                        "userPreferences": null,
                        "company": {
                            "id": 3017,
                            "stripeCustomerId": null,
                            "stripeConnectedAccId": null,
                            "name": "Cedar Meadow Farm",
                            "phoneNumber": "7175756778",
                            "website": "https://cedarmeadow.farm/ and https://www.stevegroff.com/",
                            "supportEmail": null,
                            "balance": null,
                            "totalRevenue": null,
                            "type": [
                                "FARMER"
                            ],
                            "latitude": null,
                            "longitude": null,
                            "createdAt": null,
                            "updatedAt": null,
                            "approvalStatus": null,
                            "enabled": false,
                            "ownerId": 11,
                            "farmerAttributes": {
                                "id": 7630,
                                "licenseType": null,
                                "licenseIssueDate": null,
                                "licenseStatus": null,
                                "licenseNumber": null,
                                "descriptionOfFarm": null,
                                "hempVariety": [],
                                "bales": [],
                                "hempType": null,
                                "certificationBy": null,
                                "ownTrucking": false,
                                "balesAvailable": null,
                                "weightPerBale": null,
                                "previousCrop": null,
                                "seedingRate": null,
                                "rowSpaceInches": null,
                                "pesticidesUsed": [],
                                "weatherInGeneral": null,
                                "fertilizerUsed": [],
                                "estimatedWeeds": null,
                                "totalAcreForGrowingIHemp": null,
                                "totalAcreCurrentlyUnderContract": null,
                                "region": "Northeast"
                            },
                            "manufacturesAttributes": {
                                "id": 7560,
                                "targetTypeOfOutput": null,
                                "descriptionOfManufacturer": null,
                                "deliverySchedule": null,
                                "regions": null
                            },
                            "processorAttributes": {
                                "id": 7561,
                                "totalCapacityPerDayInTons": null,
                                "numberOfShiftsBeingUsed": 0,
                                "annualTonsUnderContract": 0,
                                "totalAnnualTonsAvailableToMarket": 0,
                                "regions": [],
                                "baleTypePreferred": null,
                                "targetTypeOfOutput": null,
                                "siteUtilization": null,
                                "descriptionOfProcessing": null,
                                "supportedIndustries": []
                            },
                            "specRequests": [],
                            "addresses": [
                                {
                                    "id": 1,
                                    "addressOne": "679 Hilldale Road",
                                    "addressTwo": null,
                                    "city": "Holtwood",
                                    "state": "PA",
                                    "zipcode": "17532",
                                    "country": "United States",
                                    "primaryAddress": null
                                }
                            ]
                        },
                        "addresses": [
                            {
                                "id": 7546,
                                "addressOne": "8113 Ventnor Rd",
                                "addressTwo": "",
                                "city": "Pasadena",
                                "state": "md",
                                "zipcode": "21122",
                                "country": "United States",
                                "primaryAddress": true
                            }
                        ]
                    },
                    "company": {
                        "id": 3012,
                        "stripeCustomerId": null,
                        "stripeConnectedAccId": "acct_1NapNpPI8Fk7rmDX",
                        "name": "I-Hemp Katalyst",
                        "phoneNumber": null,
                        "website": "https://www.i-hempkatalyst.com",
                        "supportEmail": null,
                        "balance": 0,
                        "totalRevenue": 0,
                        "type": [
                            "PROCESSOR"
                        ],
                        "latitude": null,
                        "longitude": null,
                        "createdAt": "2023-06-05T23:39:41.316+00:00",
                        "updatedAt": "2023-06-05T23:39:41.316+00:00",
                        "approvalStatus": "PENDING",
                        "enabled": true,
                        "ownerId": 14,
                        "farmerAttributes": {
                            "id": 7550,
                            "licenseType": null,
                            "licenseIssueDate": null,
                            "licenseStatus": null,
                            "licenseNumber": null,
                            "descriptionOfFarm": null,
                            "hempVariety": null,
                            "bales": null,
                            "hempType": null,
                            "certificationBy": null,
                            "ownTrucking": false,
                            "balesAvailable": 0,
                            "weightPerBale": 0,
                            "previousCrop": null,
                            "seedingRate": 0,
                            "rowSpaceInches": 0,
                            "pesticidesUsed": null,
                            "weatherInGeneral": null,
                            "fertilizerUsed": null,
                            "estimatedWeeds": null,
                            "totalAcreForGrowingIHemp": null,
                            "totalAcreCurrentlyUnderContract": null,
                            "region": null
                        },
                        "manufacturesAttributes": {
                            "id": 7551,
                            "targetTypeOfOutput": null,
                            "descriptionOfManufacturer": null,
                            "deliverySchedule": null,
                            "regions": null
                        },
                        "processorAttributes": {
                            "id": 7525,
                            "totalCapacityPerDayInTons": 8,
                            "numberOfShiftsBeingUsed": 2,
                            "annualTonsUnderContract": 250,
                            "totalAnnualTonsAvailableToMarket": 8000,
                            "regions": [
                                "Northeast"
                            ],
                            "baleTypePreferred": "Round",
                            "targetTypeOfOutput": "Fiber",
                            "siteUtilization": null,
                            "descriptionOfProcessing": null,
                            "supportedIndustries": [
                                {
                                    "id": 1,
                                    "sicCode": 100,
                                    "office": "Industrial Applications and Services",
                                    "industryTitle": "AGRICULTURAL PRODUCTION-CROPS"
                                }
                            ]
                        },
                        "specRequests": [],
                        "addresses": [
                            {
                                "id": 7545,
                                "addressOne": "1745 Dorsey Rd, Suite E ",
                                "addressTwo": "",
                                "city": "Hanover",
                                "state": "MD",
                                "zipcode": "21076",
                                "country": "",
                                "primaryAddress": true
                            }
                        ]
                    },
                    "approvalStatus": "APPROVED"
                },
                {
                    "id": 5,
                    "user": {
                        "id": 22,
                        "stripeCustomerId": null,
                        "firstName": "Anthony",
                        "lastName": "Sorantino",
                        "email": "sorantino@gmail.com",
                        "ip": null,
                        "phoneNumber": "8568123150",
                        "approvalStatus": "PENDING",
                        "roles": [
                            "COMPANY_ADMIN",
                            "OWNER"
                        ],
                        "createdDate": "2023-06-12T17:38:20.174+00:00",
                        "lastModified": "2023-06-13T00:00:00.874+00:00",
                        "lastLogin": null,
                        "enabled": true,
                        "trialDaysRemaining": null,
                        "permissions": {},
                        "userPreferences": null,
                        "company": {
                            "id": 3018,
                            "stripeCustomerId": null,
                            "stripeConnectedAccId": null,
                            "name": "Twin Bridges Hemp LLC",
                            "phoneNumber": "8568123150",
                            "website": null,
                            "supportEmail": null,
                            "balance": null,
                            "totalRevenue": null,
                            "type": [
                                "FARMER"
                            ],
                            "latitude": null,
                            "longitude": null,
                            "createdAt": null,
                            "updatedAt": null,
                            "approvalStatus": null,
                            "enabled": false,
                            "ownerId": 22,
                            "farmerAttributes": {
                                "id": 7639,
                                "licenseType": null,
                                "licenseIssueDate": null,
                                "licenseStatus": null,
                                "licenseNumber": null,
                                "descriptionOfFarm": null,
                                "hempVariety": null,
                                "bales": null,
                                "hempType": "Conventional",
                                "certificationBy": null,
                                "ownTrucking": false,
                                "balesAvailable": 0,
                                "weightPerBale": 0,
                                "previousCrop": null,
                                "seedingRate": 0,
                                "rowSpaceInches": 0,
                                "pesticidesUsed": null,
                                "weatherInGeneral": "dry",
                                "fertilizerUsed": null,
                                "estimatedWeeds": null,
                                "totalAcreForGrowingIHemp": null,
                                "totalAcreCurrentlyUnderContract": null,
                                "region": "Northeast"
                            },
                            "manufacturesAttributes": {
                                "id": 7562,
                                "targetTypeOfOutput": null,
                                "descriptionOfManufacturer": null,
                                "deliverySchedule": null,
                                "regions": null
                            },
                            "processorAttributes": {
                                "id": 7563,
                                "totalCapacityPerDayInTons": null,
                                "numberOfShiftsBeingUsed": 0,
                                "annualTonsUnderContract": 0,
                                "totalAnnualTonsAvailableToMarket": 0,
                                "regions": [],
                                "baleTypePreferred": null,
                                "targetTypeOfOutput": null,
                                "siteUtilization": null,
                                "descriptionOfProcessing": null,
                                "supportedIndustries": []
                            },
                            "specRequests": [],
                            "addresses": [
                                {
                                    "id": 2,
                                    "addressOne": "419 harding hwy",
                                    "addressTwo": null,
                                    "city": "carneys point",
                                    "state": "NEW JERSEY (NJ)",
                                    "zipcode": "08069",
                                    "country": "United States",
                                    "primaryAddress": null
                                }
                            ]
                        },
                        "addresses": []
                    },
                    "company": {
                        "id": 3018,
                        "stripeCustomerId": null,
                        "stripeConnectedAccId": null,
                        "name": "Twin Bridges Hemp LLC",
                        "phoneNumber": "8568123150",
                        "website": null,
                        "supportEmail": null,
                        "balance": null,
                        "totalRevenue": null,
                        "type": [
                            "FARMER"
                        ],
                        "latitude": null,
                        "longitude": null,
                        "createdAt": null,
                        "updatedAt": null,
                        "approvalStatus": null,
                        "enabled": false,
                        "ownerId": 22,
                        "farmerAttributes": {
                            "id": 7639,
                            "licenseType": null,
                            "licenseIssueDate": null,
                            "licenseStatus": null,
                            "licenseNumber": null,
                            "descriptionOfFarm": null,
                            "hempVariety": null,
                            "bales": null,
                            "hempType": "Conventional",
                            "certificationBy": null,
                            "ownTrucking": false,
                            "balesAvailable": 0,
                            "weightPerBale": 0,
                            "previousCrop": null,
                            "seedingRate": 0,
                            "rowSpaceInches": 0,
                            "pesticidesUsed": null,
                            "weatherInGeneral": "dry",
                            "fertilizerUsed": null,
                            "estimatedWeeds": null,
                            "totalAcreForGrowingIHemp": null,
                            "totalAcreCurrentlyUnderContract": null,
                            "region": "Northeast"
                        },
                        "manufacturesAttributes": {
                            "id": 7562,
                            "targetTypeOfOutput": null,
                            "descriptionOfManufacturer": null,
                            "deliverySchedule": null,
                            "regions": null
                        },
                        "processorAttributes": {
                            "id": 7563,
                            "totalCapacityPerDayInTons": null,
                            "numberOfShiftsBeingUsed": 0,
                            "annualTonsUnderContract": 0,
                            "totalAnnualTonsAvailableToMarket": 0,
                            "regions": [],
                            "baleTypePreferred": null,
                            "targetTypeOfOutput": null,
                            "siteUtilization": null,
                            "descriptionOfProcessing": null,
                            "supportedIndustries": []
                        },
                        "specRequests": [],
                        "addresses": [
                            {
                                "id": 2,
                                "addressOne": "419 harding hwy",
                                "addressTwo": null,
                                "city": "carneys point",
                                "state": "NEW JERSEY (NJ)",
                                "zipcode": "08069",
                                "country": "United States",
                                "primaryAddress": null
                            }
                        ]
                    },
                    "approvalStatus": "APPROVED"
                },
                {
                    "id": 1,
                    "user": {
                        "id": 6,
                        "stripeCustomerId": null,
                        "firstName": "Duane",
                        "lastName": "Farmer",
                        "email": "dpshuga@gmail.com",
                        "ip": "108.3.173.61",
                        "phoneNumber": "3013183388",
                        "approvalStatus": "PENDING",
                        "roles": [
                            "COMPANY_ADMIN",
                            "OWNER"
                        ],
                        "createdDate": "2023-06-06T23:09:36.635+00:00",
                        "lastModified": "2023-06-13T14:50:47.475+00:00",
                        "lastLogin": "2023-06-23T15:57:08.855+00:00",
                        "enabled": true,
                        "trialDaysRemaining": null,
                        "permissions": {},
                        "userPreferences": null,
                        "company": {
                            "id": 3018,
                            "stripeCustomerId": null,
                            "stripeConnectedAccId": null,
                            "name": "Twin Bridges Hemp LLC",
                            "phoneNumber": "8568123150",
                            "website": null,
                            "supportEmail": null,
                            "balance": null,
                            "totalRevenue": null,
                            "type": [
                                "FARMER"
                            ],
                            "latitude": null,
                            "longitude": null,
                            "createdAt": null,
                            "updatedAt": null,
                            "approvalStatus": null,
                            "enabled": false,
                            "ownerId": 22,
                            "farmerAttributes": {
                                "id": 7639,
                                "licenseType": null,
                                "licenseIssueDate": null,
                                "licenseStatus": null,
                                "licenseNumber": null,
                                "descriptionOfFarm": null,
                                "hempVariety": null,
                                "bales": null,
                                "hempType": "Conventional",
                                "certificationBy": null,
                                "ownTrucking": false,
                                "balesAvailable": 0,
                                "weightPerBale": 0,
                                "previousCrop": null,
                                "seedingRate": 0,
                                "rowSpaceInches": 0,
                                "pesticidesUsed": null,
                                "weatherInGeneral": "dry",
                                "fertilizerUsed": null,
                                "estimatedWeeds": null,
                                "totalAcreForGrowingIHemp": null,
                                "totalAcreCurrentlyUnderContract": null,
                                "region": "Northeast"
                            },
                            "manufacturesAttributes": {
                                "id": 7562,
                                "targetTypeOfOutput": null,
                                "descriptionOfManufacturer": null,
                                "deliverySchedule": null,
                                "regions": null
                            },
                            "processorAttributes": {
                                "id": 7563,
                                "totalCapacityPerDayInTons": null,
                                "numberOfShiftsBeingUsed": 0,
                                "annualTonsUnderContract": 0,
                                "totalAnnualTonsAvailableToMarket": 0,
                                "regions": [],
                                "baleTypePreferred": null,
                                "targetTypeOfOutput": null,
                                "siteUtilization": null,
                                "descriptionOfProcessing": null,
                                "supportedIndustries": []
                            },
                            "specRequests": [],
                            "addresses": [
                                {
                                    "id": 2,
                                    "addressOne": "419 harding hwy",
                                    "addressTwo": null,
                                    "city": "carneys point",
                                    "state": "NEW JERSEY (NJ)",
                                    "zipcode": "08069",
                                    "country": "United States",
                                    "primaryAddress": null
                                }
                            ]
                        },
                        "addresses": []
                    },
                    "company": {
                        "id": 3014,
                        "stripeCustomerId": null,
                        "stripeConnectedAccId": null,
                        "name": "Digital Lantern Federal",
                        "phoneNumber": "13013183388",
                        "website": null,
                        "supportEmail": null,
                        "balance": 0,
                        "totalRevenue": 0,
                        "type": [
                            "FARMER"
                        ],
                        "latitude": null,
                        "longitude": null,
                        "createdAt": "2023-06-06T23:08:33.556+00:00",
                        "updatedAt": "2023-06-06T23:08:33.556+00:00",
                        "approvalStatus": "PENDING",
                        "enabled": false,
                        "ownerId": 6,
                        "farmerAttributes": {
                            "id": 7529,
                            "licenseType": null,
                            "licenseIssueDate": "2023-06-05T04:00:00.000+00:00",
                            "licenseStatus": null,
                            "licenseNumber": null,
                            "descriptionOfFarm": null,
                            "hempVariety": [],
                            "bales": [],
                            "hempType": null,
                            "certificationBy": null,
                            "ownTrucking": false,
                            "balesAvailable": null,
                            "weightPerBale": null,
                            "previousCrop": null,
                            "seedingRate": null,
                            "rowSpaceInches": null,
                            "pesticidesUsed": [],
                            "weatherInGeneral": "mild and humid",
                            "fertilizerUsed": [],
                            "estimatedWeeds": null,
                            "totalAcreForGrowingIHemp": null,
                            "totalAcreCurrentlyUnderContract": null,
                            "region": null
                        },
                        "manufacturesAttributes": {
                            "id": 7530,
                            "targetTypeOfOutput": null,
                            "descriptionOfManufacturer": null,
                            "deliverySchedule": null,
                            "regions": null
                        },
                        "processorAttributes": {
                            "id": 7531,
                            "totalCapacityPerDayInTons": null,
                            "numberOfShiftsBeingUsed": null,
                            "annualTonsUnderContract": null,
                            "totalAnnualTonsAvailableToMarket": null,
                            "regions": [],
                            "baleTypePreferred": null,
                            "targetTypeOfOutput": null,
                            "siteUtilization": null,
                            "descriptionOfProcessing": null,
                            "supportedIndustries": []
                        },
                        "specRequests": [],
                        "addresses": [
                            {
                                "id": 7532,
                                "addressOne": "1344 Ashton rd",
                                "addressTwo": "",
                                "city": "Hanover",
                                "state": "MD",
                                "zipcode": "21076",
                                "country": "",
                                "primaryAddress": true
                            }
                        ]
                    },
                    "approvalStatus": "APPROVED"
                },
                {
                    "id": 6,
                    "user": {
                        "id": 28,
                        "stripeCustomerId": null,
                        "firstName": "Patrick",
                        "lastName": "Van Meter",
                        "email": "patrick@midwestnaturalfiber.com",
                        "ip": "64.85.217.199",
                        "phoneNumber": "3128521155",
                        "approvalStatus": "PENDING",
                        "roles": [
                            "COMPANY_ADMIN",
                            "OWNER"
                        ],
                        "createdDate": "2023-06-13T15:31:12.928+00:00",
                        "lastModified": "2023-06-13T15:48:10.962+00:00",
                        "lastLogin": "2023-07-31T13:51:48.482+00:00",
                        "enabled": true,
                        "trialDaysRemaining": null,
                        "permissions": {},
                        "userPreferences": null,
                        "company": {
                            "id": 3022,
                            "stripeCustomerId": null,
                            "stripeConnectedAccId": null,
                            "name": "Midwest Natural Fiber",
                            "phoneNumber": null,
                            "website": null,
                            "supportEmail": null,
                            "balance": 0,
                            "totalRevenue": 0,
                            "type": [
                                "PROCESSOR"
                            ],
                            "latitude": null,
                            "longitude": null,
                            "createdAt": "2023-06-09T22:53:43.991+00:00",
                            "updatedAt": "2023-06-09T22:53:43.991+00:00",
                            "approvalStatus": "PENDING",
                            "enabled": false,
                            "ownerId": 28,
                            "farmerAttributes": {
                                "id": 7555,
                                "licenseType": null,
                                "licenseIssueDate": null,
                                "licenseStatus": null,
                                "licenseNumber": null,
                                "descriptionOfFarm": null,
                                "hempVariety": [],
                                "bales": [],
                                "hempType": null,
                                "certificationBy": null,
                                "ownTrucking": false,
                                "balesAvailable": null,
                                "weightPerBale": null,
                                "previousCrop": null,
                                "seedingRate": null,
                                "rowSpaceInches": null,
                                "pesticidesUsed": [],
                                "weatherInGeneral": null,
                                "fertilizerUsed": [],
                                "estimatedWeeds": null,
                                "totalAcreForGrowingIHemp": null,
                                "totalAcreCurrentlyUnderContract": null,
                                "region": null
                            },
                            "manufacturesAttributes": {
                                "id": 7556,
                                "targetTypeOfOutput": null,
                                "descriptionOfManufacturer": null,
                                "deliverySchedule": null,
                                "regions": null
                            },
                            "processorAttributes": {
                                "id": 7557,
                                "totalCapacityPerDayInTons": 60,
                                "numberOfShiftsBeingUsed": 1,
                                "annualTonsUnderContract": 65000,
                                "totalAnnualTonsAvailableToMarket": 3000,
                                "regions": [
                                    "Midwest"
                                ],
                                "baleTypePreferred": "Round",
                                "targetTypeOfOutput": "Fiber",
                                "siteUtilization": null,
                                "descriptionOfProcessing": null,
                                "supportedIndustries": [
                                    {
                                        "id": 43,
                                        "sicCode": 2200,
                                        "office": "Office of Manufacturing",
                                        "industryTitle": "TEXTILE MILL PRODUCTS"
                                    },
                                    {
                                        "id": 21,
                                        "sicCode": 1700,
                                        "office": "Office of Real Estate & Construction",
                                        "industryTitle": "CONSTRUCTION - SPECIAL TRADE CONTRACTORS"
                                    },
                                    {
                                        "id": 38,
                                        "sicCode": 2086,
                                        "office": "Office of Manufacturing",
                                        "industryTitle": "BOTTLED & CANNED SOFT DRINKS & CARBONATED WATERS"
                                    }
                                ]
                            },
                            "specRequests": [],
                            "addresses": [
                                {
                                    "id": 7624,
                                    "addressOne": "422 S. White Oak Road.",
                                    "addressTwo": "",
                                    "city": "Normal",
                                    "state": "IL",
                                    "zipcode": " 61761",
                                    "country": "",
                                    "primaryAddress": true
                                }
                            ]
                        },
                        "addresses": []
                    },
                    "company": {
                        "id": 3022,
                        "stripeCustomerId": null,
                        "stripeConnectedAccId": null,
                        "name": "Midwest Natural Fiber",
                        "phoneNumber": null,
                        "website": null,
                        "supportEmail": null,
                        "balance": 0,
                        "totalRevenue": 0,
                        "type": [
                            "PROCESSOR"
                        ],
                        "latitude": null,
                        "longitude": null,
                        "createdAt": "2023-06-09T22:53:43.991+00:00",
                        "updatedAt": "2023-06-09T22:53:43.991+00:00",
                        "approvalStatus": "PENDING",
                        "enabled": false,
                        "ownerId": 28,
                        "farmerAttributes": {
                            "id": 7555,
                            "licenseType": null,
                            "licenseIssueDate": null,
                            "licenseStatus": null,
                            "licenseNumber": null,
                            "descriptionOfFarm": null,
                            "hempVariety": [],
                            "bales": [],
                            "hempType": null,
                            "certificationBy": null,
                            "ownTrucking": false,
                            "balesAvailable": null,
                            "weightPerBale": null,
                            "previousCrop": null,
                            "seedingRate": null,
                            "rowSpaceInches": null,
                            "pesticidesUsed": [],
                            "weatherInGeneral": null,
                            "fertilizerUsed": [],
                            "estimatedWeeds": null,
                            "totalAcreForGrowingIHemp": null,
                            "totalAcreCurrentlyUnderContract": null,
                            "region": null
                        },
                        "manufacturesAttributes": {
                            "id": 7556,
                            "targetTypeOfOutput": null,
                            "descriptionOfManufacturer": null,
                            "deliverySchedule": null,
                            "regions": null
                        },
                        "processorAttributes": {
                            "id": 7557,
                            "totalCapacityPerDayInTons": 60,
                            "numberOfShiftsBeingUsed": 1,
                            "annualTonsUnderContract": 65000,
                            "totalAnnualTonsAvailableToMarket": 3000,
                            "regions": [
                                "Midwest"
                            ],
                            "baleTypePreferred": "Round",
                            "targetTypeOfOutput": "Fiber",
                            "siteUtilization": null,
                            "descriptionOfProcessing": null,
                            "supportedIndustries": [
                                {
                                    "id": 43,
                                    "sicCode": 2200,
                                    "office": "Office of Manufacturing",
                                    "industryTitle": "TEXTILE MILL PRODUCTS"
                                },
                                {
                                    "id": 21,
                                    "sicCode": 1700,
                                    "office": "Office of Real Estate & Construction",
                                    "industryTitle": "CONSTRUCTION - SPECIAL TRADE CONTRACTORS"
                                },
                                {
                                    "id": 38,
                                    "sicCode": 2086,
                                    "office": "Office of Manufacturing",
                                    "industryTitle": "BOTTLED & CANNED SOFT DRINKS & CARBONATED WATERS"
                                }
                            ]
                        },
                        "specRequests": [],
                        "addresses": [
                            {
                                "id": 7624,
                                "addressOne": "422 S. White Oak Road.",
                                "addressTwo": "",
                                "city": "Normal",
                                "state": "IL",
                                "zipcode": " 61761",
                                "country": "",
                                "primaryAddress": true
                            }
                        ]
                    },
                    "approvalStatus": "APPROVED"
                },
                {
                    "id": 2,
                    "user": {
                        "id": 11,
                        "stripeCustomerId": null,
                        "firstName": "David",
                        "lastName": "Groff",
                        "email": "sdg96@frontier.com",
                        "ip": "174.59.247.139",
                        "phoneNumber": "717-945-9471",
                        "approvalStatus": "PENDING",
                        "roles": [
                            "COMPANY_ADMIN",
                            "OWNER"
                        ],
                        "createdDate": "2023-06-07T23:03:16.849+00:00",
                        "lastModified": "2023-06-19T22:27:13.145+00:00",
                        "lastLogin": "2023-06-27T21:07:05.087+00:00",
                        "enabled": true,
                        "trialDaysRemaining": null,
                        "permissions": {},
                        "userPreferences": null,
                        "company": {
                            "id": 3017,
                            "stripeCustomerId": null,
                            "stripeConnectedAccId": null,
                            "name": "Cedar Meadow Farm",
                            "phoneNumber": "7175756778",
                            "website": "https://cedarmeadow.farm/ and https://www.stevegroff.com/",
                            "supportEmail": null,
                            "balance": null,
                            "totalRevenue": null,
                            "type": [
                                "FARMER"
                            ],
                            "latitude": null,
                            "longitude": null,
                            "createdAt": null,
                            "updatedAt": null,
                            "approvalStatus": null,
                            "enabled": false,
                            "ownerId": 11,
                            "farmerAttributes": {
                                "id": 7630,
                                "licenseType": null,
                                "licenseIssueDate": null,
                                "licenseStatus": null,
                                "licenseNumber": null,
                                "descriptionOfFarm": null,
                                "hempVariety": [],
                                "bales": [],
                                "hempType": null,
                                "certificationBy": null,
                                "ownTrucking": false,
                                "balesAvailable": null,
                                "weightPerBale": null,
                                "previousCrop": null,
                                "seedingRate": null,
                                "rowSpaceInches": null,
                                "pesticidesUsed": [],
                                "weatherInGeneral": null,
                                "fertilizerUsed": [],
                                "estimatedWeeds": null,
                                "totalAcreForGrowingIHemp": null,
                                "totalAcreCurrentlyUnderContract": null,
                                "region": "Northeast"
                            },
                            "manufacturesAttributes": {
                                "id": 7560,
                                "targetTypeOfOutput": null,
                                "descriptionOfManufacturer": null,
                                "deliverySchedule": null,
                                "regions": null
                            },
                            "processorAttributes": {
                                "id": 7561,
                                "totalCapacityPerDayInTons": null,
                                "numberOfShiftsBeingUsed": 0,
                                "annualTonsUnderContract": 0,
                                "totalAnnualTonsAvailableToMarket": 0,
                                "regions": [],
                                "baleTypePreferred": null,
                                "targetTypeOfOutput": null,
                                "siteUtilization": null,
                                "descriptionOfProcessing": null,
                                "supportedIndustries": []
                            },
                            "specRequests": [],
                            "addresses": [
                                {
                                    "id": 1,
                                    "addressOne": "679 Hilldale Road",
                                    "addressTwo": null,
                                    "city": "Holtwood",
                                    "state": "PA",
                                    "zipcode": "17532",
                                    "country": "United States",
                                    "primaryAddress": null
                                }
                            ]
                        },
                        "addresses": [
                            {
                                "id": 7600,
                                "addressOne": "536 Drytown Rd",
                                "addressTwo": "",
                                "city": "Holtwood",
                                "state": "Pennsylvania",
                                "zipcode": "17532",
                                "country": "United States",
                                "primaryAddress": true
                            }
                        ]
                    },
                    "company": {
                        "id": 3017,
                        "stripeCustomerId": null,
                        "stripeConnectedAccId": null,
                        "name": "Cedar Meadow Farm",
                        "phoneNumber": "7175756778",
                        "website": "https://cedarmeadow.farm/ and https://www.stevegroff.com/",
                        "supportEmail": null,
                        "balance": null,
                        "totalRevenue": null,
                        "type": [
                            "FARMER"
                        ],
                        "latitude": null,
                        "longitude": null,
                        "createdAt": null,
                        "updatedAt": null,
                        "approvalStatus": null,
                        "enabled": false,
                        "ownerId": 11,
                        "farmerAttributes": {
                            "id": 7630,
                            "licenseType": null,
                            "licenseIssueDate": null,
                            "licenseStatus": null,
                            "licenseNumber": null,
                            "descriptionOfFarm": null,
                            "hempVariety": [],
                            "bales": [],
                            "hempType": null,
                            "certificationBy": null,
                            "ownTrucking": false,
                            "balesAvailable": null,
                            "weightPerBale": null,
                            "previousCrop": null,
                            "seedingRate": null,
                            "rowSpaceInches": null,
                            "pesticidesUsed": [],
                            "weatherInGeneral": null,
                            "fertilizerUsed": [],
                            "estimatedWeeds": null,
                            "totalAcreForGrowingIHemp": null,
                            "totalAcreCurrentlyUnderContract": null,
                            "region": "Northeast"
                        },
                        "manufacturesAttributes": {
                            "id": 7560,
                            "targetTypeOfOutput": null,
                            "descriptionOfManufacturer": null,
                            "deliverySchedule": null,
                            "regions": null
                        },
                        "processorAttributes": {
                            "id": 7561,
                            "totalCapacityPerDayInTons": null,
                            "numberOfShiftsBeingUsed": 0,
                            "annualTonsUnderContract": 0,
                            "totalAnnualTonsAvailableToMarket": 0,
                            "regions": [],
                            "baleTypePreferred": null,
                            "targetTypeOfOutput": null,
                            "siteUtilization": null,
                            "descriptionOfProcessing": null,
                            "supportedIndustries": []
                        },
                        "specRequests": [],
                        "addresses": [
                            {
                                "id": 1,
                                "addressOne": "679 Hilldale Road",
                                "addressTwo": null,
                                "city": "Holtwood",
                                "state": "PA",
                                "zipcode": "17532",
                                "country": "United States",
                                "primaryAddress": null
                            }
                        ]
                    },
                    "approvalStatus": "APPROVED"
                }
            ],
            "pageable": {
                "sort": {
                    "unsorted": false,
                    "sorted": true,
                    "empty": false
                },
                "pageNumber": 0,
                "pageSize": 5,
                "offset": 0,
                "paged": true,
                "unpaged": false
            },
            "totalElements": 18,
            "totalPages": 4,
            "last": false,
            "numberOfElements": 5,
            "size": 5,
            "number": 0,
            "sort": {
                "unsorted": false,
                "sorted": true,
                "empty": false
            },
            "first": true,
            "empty": false
        }
    }
    getAccounts() {
        return {
            "id": 7,
            "stripeCustomerId": null,
            "firstName": "Michael",
            "lastName": "barcarse",
            "email": "mbarcarse@digitallantern.com",
            "ip": "",
            "phoneNumber": "8085203280",
            "profilePicture": {
                "id": null,
                "name": "avatarHemp.png",
                "position": 0,
                "s3Location": "https://hk-media-staging1.s3.us-east-2.amazonaws.com/7/profile_picture/avatarHemp.png",
                "imageKey": "7/profile_picture/avatarHemp.png",
                "thumbnail": false,
                "imageFile": ""
            },
            "approvalStatus": "PENDING",
            "roles": [
                "COMPANY_ADMIN",
                "ADMIN"
            ],
            "createdDate": 1685492461715,
            "lastModified": 1696800497076,
            "lastLogin": 1696368144389,
            "enabled": true,
            "trialDaysRemaining": 0,
            "permissions": {
                "view:transporters": false,
                "view:farmers": false,
                "view:detailed_company_info": false,
                "edit:company_info": true,
                "create:products": false,
                "view:supplychain_drill_down": false,
                "delete:products": false,
                "view:processors": false,
                "view:supply_chain_rollup": false,
                "edit:product_info": true,
                "view:manufactures": false,
                "view:hemp-ai": true,
                "view:company_info": true,
                "view:supplychain_summary": true,
                "view:product_info": true,
                "view:other_company_info": false
            },
            "userPreferences": {
                version: "114"
            },
            "shoppingCart": null,
            "company": {
                "id": 3017,
                "stripeCustomerId": null,
                "stripeConnectedAccId": null,
                "name": "Cedar Meadows Farms",
                "phoneNumber": null,
                "website": null,
                "supportEmail": null,
                "logo": {
                    "id": null,
                    "name": "avatarHemp.png",
                    "position": 0,
                    "s3Location": "https://hk-media-staging1.s3.us-east-2.amazonaws.com/7/profile_picture/avatarHemp.png",
                    "imageKey": "7/profile_picture/avatarHemp.png",
                    "thumbnail": false,
                    "imageFile": ""
                },
                "balance": 0,
                "totalRevenue": 0,
                "type": [
                    "FARMER"
                ],
                "latitude": null,
                "longitude": null,
                "createdAt": 1685577566505,
                "updatedAt": 1685577566505,
                "approvalStatus": "APPROVED",
                "enabled": true,
                "ownerId": 8,
                "farmerAttributes": {
                    "id": 7532,
                    "licenseType": null,
                    "licenseIssueDate": null,
                    "licenseStatus": null,
                    "licenseNumber": null,
                    "descriptionOfFarm": null,
                    "hempVariety": [],
                    "bales": [],
                    "hempType": null,
                    "certificationBy": null,
                    "ownTrucking": true,
                    "balesAvailable": null,
                    "weightPerBale": null,
                    "previousCrop": null,
                    "seedingRate": null,
                    "rowSpaceInches": null,
                    "pesticidesUsed": [],
                    "weatherInGeneral": null,
                    "fertilizerUsed": [],
                    "estimatedWeeds": null,
                    "totalAcreForGrowingIHemp": null,
                    "totalAcreCurrentlyUnderContract": null,
                    "region": null
                },
                "manufacturesAttributes": {
                    "id": 7533,
                    "targetTypeOfOutput": null,
                    "descriptionOfManufacturer": null,
                    "deliverySchedule": null,
                    "regions": null
                },
                "processorAttributes": {
                    "id": 7534,
                    "totalCapacityPerDayInTons": null,
                    "numberOfShiftsBeingUsed": null,
                    "annualTonsUnderContract": null,
                    "totalAnnualTonsAvailableToMarket": null,
                    "regions": [],
                    "baleTypePreferred": null,
                    "targetTypeOfOutput": null,
                    "siteUtilization": null,
                    "descriptionOfProcessing": null,
                    "supportedIndustries": []
                },
                "specRequests": [],
                "addresses": [
                    {
                        "id": 7540,
                        "addressOne": "535 Drytown Rd,",
                        "addressTwo": "",
                        "city": "Holtwood,",
                        "state": "PA ",
                        "zipcode": "17532",
                        "country": "",
                        "primaryAddress": true
                    }
                ]
            },
            "addresses": [
                {
                    "id": 7550,
                    "addressOne": "348 kipuni st",
                    "addressTwo": "",
                    "city": "hilo",
                    "state": "HI",
                    "zipcode": "96720",
                    "country": "United States",
                    "primaryAddress": true
                }
            ]
        }
    }
    fetchTransactionHistory() {
        return {
            "content": [
              {
                "id": 1,
                "companyId": 7,
                "completeOrderId": 1,
                "customerName": "Kallatt Brown",
                "customerEmail": "kallattbrown@gmail.com",
                "customerOrderItem": {
                  "id": 3,
                  "paymentIntentId": "pi_3Na50YA855UbDdxy0CN93U7Y",
                  "userId": 1,
                  "status": "processing",
                  "soldBy": "BioPhil",
                  "product": {
                    "productId": 22,
                    "stripePriceId": "price_1NYy0PA855UbDdxy3j1W2k8k",
                    "productName": "Test Live Product",
                    "productDescription": "Test Live product",
                    "soldByCompanyId": 7,
                    "soldByCompanyName": null,
                    "specs": {
                      "defaultImage": "layout/images/metaihemp.png"
                    },
                    "quantity": 8,
                    "unitPrice": 45.75,
                    "totalPrice": 366
                  },
                  "total": 366,
                  "datePurchased": "2023-07-31T22:56:14.279+00:00",
                  "createdAt": "2023-07-31T22:56:14.279+00:00",
                  "updatedAt": "2023-07-31T22:56:14.279+00:00"
                },
                "amount": 599.2,
                "createdAt": "2023-07-31T22:56:14.381+00:00",
                "updatedAt": "2023-07-31T22:56:14.381+00:00",
                "status": "processing"
              },
              {
                "id": 2,
                "companyId": 7,
                "completeOrderId": 1,
                "customerName": "Kallatt Brown",
                "customerEmail": "kallattbrown@gmail.com",
                "customerOrderItem": {
                  "id": 4,
                  "paymentIntentId": "pi_3Na50YA855UbDdxy0CN93U7Y",
                  "userId": 1,
                  "status": "processing",
                  "soldBy": "BioPhil",
                  "product": {
                    "productId": 23,
                    "stripePriceId": "price_1NYy13A855UbDdxyIqnlZkZ4",
                    "productName": "Test Live Product 2",
                    "productDescription": "Test Live Product 2",
                    "soldByCompanyId": 7,
                    "soldByCompanyName": null,
                    "specs": {
                      "defaultImage": "layout/images/metaihemp.png"
                    },
                    "quantity": 8,
                    "unitPrice": 23.48,
                    "totalPrice": 187.84
                  },
                  "total": 187.84,
                  "datePurchased": "2023-07-31T22:56:18.340+00:00",
                  "createdAt": "2023-07-31T22:56:18.340+00:00",
                  "updatedAt": "2023-07-31T22:56:18.340+00:00"
                },
                "amount": 599.2,
                "createdAt": "2023-07-31T22:56:18.381+00:00",
                "updatedAt": "2023-07-31T22:56:18.381+00:00",
                "status": "processing"
              },
              {
                "id": 3,
                "companyId": 7,
                "completeOrderId": 2,
                "customerName": "Kallatt Brown",
                "customerEmail": "kallattbrown@gmail.com",
                "customerOrderItem": {
                  "id": 5,
                  "paymentIntentId": "pi_3Na5B7A855UbDdxy0G4Ss7Ve",
                  "userId": 1,
                  "status": "processing",
                  "soldBy": "BioPhil",
                  "product": {
                    "productId": 22,
                    "stripePriceId": "price_1NYy0PA855UbDdxy3j1W2k8k",
                    "productName": "Test Live Product",
                    "productDescription": "Test Live product",
                    "soldByCompanyId": 7,
                    "soldByCompanyName": null,
                    "specs": {
                      "defaultImage": "layout/images/metaihemp.png"
                    },
                    "quantity": 32,
                    "unitPrice": 45.75,
                    "totalPrice": 1464
                  },
                  "total": 1464,
                  "datePurchased": "2023-07-31T23:07:09.543+00:00",
                  "createdAt": "2023-07-31T23:07:09.543+00:00",
                  "updatedAt": "2023-07-31T23:07:09.543+00:00"
                },
                "amount": 1989.66,
                "createdAt": "2023-07-31T23:07:09.700+00:00",
                "updatedAt": "2023-07-31T23:07:09.700+00:00",
                "status": "processing"
              },
              {
                "id": 4,
                "companyId": 7,
                "completeOrderId": 2,
                "customerName": "Kallatt Brown",
                "customerEmail": "kallattbrown@gmail.com",
                "customerOrderItem": {
                  "id": 6,
                  "paymentIntentId": "pi_3Na5B7A855UbDdxy0G4Ss7Ve",
                  "userId": 1,
                  "status": "processing",
                  "soldBy": "BioPhil",
                  "product": {
                    "productId": 23,
                    "stripePriceId": "price_1NYy13A855UbDdxyIqnlZkZ4",
                    "productName": "Test Live Product 2",
                    "productDescription": "Test Live Product 2",
                    "soldByCompanyId": 7,
                    "soldByCompanyName": null,
                    "specs": {
                      "defaultImage": "layout/images/metaihemp.png"
                    },
                    "quantity": 16,
                    "unitPrice": 23.48,
                    "totalPrice": 375.68
                  },
                  "total": 375.68,
                  "datePurchased": "2023-07-31T23:07:13.562+00:00",
                  "createdAt": "2023-07-31T23:07:13.562+00:00",
                  "updatedAt": "2023-07-31T23:07:13.562+00:00"
                },
                "amount": 1989.66,
                "createdAt": "2023-07-31T23:07:13.593+00:00",
                "updatedAt": "2023-07-31T23:07:13.593+00:00",
                "status": "processing"
              },
              {
                "id": 5,
                "companyId": 7,
                "completeOrderId": 3,
                "customerName": "Kallatt Brown",
                "customerEmail": "kallattbrown@gmail.com",
                "customerOrderItem": {
                  "id": 7,
                  "paymentIntentId": "pi_3Na5GcA855UbDdxy17DRwGf8",
                  "userId": 1,
                  "status": "cancelled",
                  "soldBy": "BioPhil",
                  "product": {
                    "productId": 22,
                    "stripePriceId": "price_1NYy0PA855UbDdxy3j1W2k8k",
                    "productName": "Test Live Product",
                    "productDescription": "Test Live product",
                    "soldByCompanyId": 7,
                    "soldByCompanyName": null,
                    "specs": {
                      "defaultImage": "layout/images/metaihemp.png"
                    },
                    "quantity": 32,
                    "unitPrice": 45.75,
                    "totalPrice": 1464
                  },
                  "total": 1464,
                  "datePurchased": "2023-07-31T23:12:50.178+00:00",
                  "createdAt": "2023-07-31T23:12:50.178+00:00",
                  "updatedAt": "2023-07-31T23:12:50.178+00:00"
                },
                "amount": 1989.66,
                "createdAt": "2023-07-31T23:12:50.273+00:00",
                "updatedAt": "2023-07-31T23:12:50.273+00:00",
                "status": "processing"
              },
              {
                "id": 6,
                "companyId": 7,
                "completeOrderId": 3,
                "customerName": "Kallatt Brown",
                "customerEmail": "kallattbrown@gmail.com",
                "customerOrderItem": {
                  "id": 8,
                  "paymentIntentId": "pi_3Na5GcA855UbDdxy17DRwGf8",
                  "userId": 1,
                  "status": "cancelled",
                  "soldBy": "BioPhil",
                  "product": {
                    "productId": 23,
                    "stripePriceId": "price_1NYy13A855UbDdxyIqnlZkZ4",
                    "productName": "Test Live Product 2",
                    "productDescription": "Test Live Product 2",
                    "soldByCompanyId": 7,
                    "soldByCompanyName": null,
                    "specs": {
                      "defaultImage": "layout/images/metaihemp.png"
                    },
                    "quantity": 16,
                    "unitPrice": 23.48,
                    "totalPrice": 375.68
                  },
                  "total": 375.68,
                  "datePurchased": "2023-07-31T23:12:53.875+00:00",
                  "createdAt": "2023-07-31T23:12:53.875+00:00",
                  "updatedAt": "2023-07-31T23:12:53.875+00:00"
                },
                "amount": 1989.66,
                "createdAt": "2023-07-31T23:12:53.926+00:00",
                "updatedAt": "2023-07-31T23:12:53.926+00:00",
                "status": "processing"
              },
              {
                "id": 7,
                "companyId": 7,
                "completeOrderId": 4,
                "customerName": "Duane Shugars",
                "customerEmail": "dshugars@digitallantern.com",
                "customerOrderItem": {
                  "id": 9,
                  "paymentIntentId": "pi_3Na5psA855UbDdxy09c2lFdL",
                  "userId": 8,
                  "status": "processing",
                  "soldBy": "BioPhil",
                  "product": {
                    "productId": 22,
                    "stripePriceId": "price_1NYy0PA855UbDdxy3j1W2k8k",
                    "productName": "Test Live Product",
                    "productDescription": "Test Live product",
                    "soldByCompanyId": 7,
                    "soldByCompanyName": null,
                    "specs": {
                      "defaultImage": "layout/images/metaihemp.png"
                    },
                    "quantity": 100,
                    "unitPrice": 45.75,
                    "totalPrice": 4575
                  },
                  "total": 4575,
                  "datePurchased": "2023-07-31T23:49:16.902+00:00",
                  "createdAt": "2023-07-31T23:49:16.902+00:00",
                  "updatedAt": "2023-07-31T23:49:16.902+00:00"
                },
                "amount": 10627.13,
                "createdAt": "2023-07-31T23:49:16.919+00:00",
                "updatedAt": "2023-07-31T23:49:16.919+00:00",
                "status": "processing"
              },
              {
                "id": 8,
                "companyId": 7,
                "completeOrderId": 4,
                "customerName": "Duane Shugars",
                "customerEmail": "dshugars@digitallantern.com",
                "customerOrderItem": {
                  "id": 10,
                  "paymentIntentId": "pi_3Na5psA855UbDdxy09c2lFdL",
                  "userId": 8,
                  "status": "processing",
                  "soldBy": "BioPhil",
                  "product": {
                    "productId": 23,
                    "stripePriceId": "price_1NYy13A855UbDdxyIqnlZkZ4",
                    "productName": "Test Live Product 2",
                    "productDescription": "Test Live Product 2",
                    "soldByCompanyId": 7,
                    "soldByCompanyName": null,
                    "specs": {
                      "defaultImage": "layout/images/metaihemp.png"
                    },
                    "quantity": 200,
                    "unitPrice": 23.48,
                    "totalPrice": 4696
                  },
                  "total": 4696,
                  "datePurchased": "2023-07-31T23:49:20.195+00:00",
                  "createdAt": "2023-07-31T23:49:20.195+00:00",
                  "updatedAt": "2023-07-31T23:49:20.195+00:00"
                },
                "amount": 10627.13,
                "createdAt": "2023-07-31T23:49:20.236+00:00",
                "updatedAt": "2023-07-31T23:49:20.236+00:00",
                "status": "processing"
              }
            ],
            "pageable": {
              "sort": {
                "unsorted": true,
                "sorted": false,
                "empty": true
              },
              "pageNumber": 0,
              "pageSize": 10,
              "offset": 0,
              "unpaged": false,
              "paged": true
            },
            "totalPages": 1,
            "totalElements": 8,
            "last": true,
            "numberOfElements": 8,
            "size": 10,
            "number": 0,
            "sort": {
              "unsorted": true,
              "sorted": false,
              "empty": true
            },
            "first": true,
            "empty": false
          }
    }
    fetchOrdersHistory() {
        return {
            "content": [
              {
                "id": 14,
                "userId": 1,
                "paymentIntentId": "pi_3NYDvmA855UbDdxy0uGSibu2",
                "billToName": "Kallatt Brown",
                "billingEmail": "kallattbrown@gmail.com",
                "orderItems": [
                  {
                    "id": 19,
                    "paymentIntentId": "pi_3NYDvmA855UbDdxy0uGSibu2",
                    "userId": 1,
                    "status": null,
                    "soldBy": "Test Connected Account",
                    "product": {
                      "productId": 170,
                      "stripePriceId": "price_1NTpBpA855UbDdxyTnxDN8F5",
                      "productName": null,
                      "productDescription": "Test Connected Acc",
                      "soldByCompanyId": 1734,
                      "soldByCompanyName": null,
                      "specs": {
                        "defaultImage": "layout/images/metaihemp.png"
                      },
                      "quantity": 3,
                      "unitPrice": 40,
                      "totalPrice": 120
                    },
                    "total": 120,
                    "datePurchased": "2023-07-26T20:03:37.231+00:00",
                    "createdAt": "2023-07-26T20:03:37.231+00:00",
                    "updatedAt": "2023-07-26T20:03:37.231+00:00"
                  },
                  {
                    "id": 20,
                    "paymentIntentId": "pi_3NYDvmA855UbDdxy0uGSibu2",
                    "userId": 1,
                    "status": null,
                    "soldBy": "Test Connected Account",
                    "product": {
                      "productId": 173,
                      "stripePriceId": "price_1NYCnqA855UbDdxy6pXTOhbF",
                      "productName": null,
                      "productDescription": "test connected account product",
                      "soldByCompanyId": 1734,
                      "soldByCompanyName": null,
                      "specs": {
                        "defaultImage": "layout/images/metaihemp.png"
                      },
                      "quantity": 3,
                      "unitPrice": 37.56,
                      "totalPrice": 112.68
                    },
                    "total": 112.68,
                    "datePurchased": "2023-07-26T20:03:39.920+00:00",
                    "createdAt": "2023-07-26T20:03:39.920+00:00",
                    "updatedAt": "2023-07-26T20:03:39.920+00:00"
                  }
                ],
                "shipToName": null,
                "shipToAddress": null,
                "subTotal": 232,
                "tax": 0,
                "processingFee": 11,
                "grandTotal": 244,
                "status": "processing",
                "datePurchased": "2023-07-26T20:03:42.274+00:00"
              },
              {
                "id": 16,
                "userId": 1,
                "paymentIntentId": "pi_3NYXZgA855UbDdxy1H9WlGJk",
                "billToName": "Kallatt Brown",
                "billingEmail": "kallattbrown@gmail.com",
                "orderItems": [
                  {
                    "id": 23,
                    "paymentIntentId": "pi_3NYXZgA855UbDdxy1H9WlGJk",
                    "userId": 1,
                    "status": null,
                    "soldBy": "Test Connected Account",
                    "product": {
                      "productId": 173,
                      "stripePriceId": "price_1NYCnqA855UbDdxy6pXTOhbF",
                      "productName": "Test Connected Account Product 3",
                      "productDescription": "test connected account product",
                      "soldByCompanyId": 1734,
                      "soldByCompanyName": null,
                      "specs": {
                        "defaultImage": "layout/images/metaihemp.png"
                      },
                      "quantity": 3,
                      "unitPrice": 37.56,
                      "totalPrice": 112.68
                    },
                    "total": 112.68,
                    "datePurchased": "2023-07-27T17:02:07.423+00:00",
                    "createdAt": "2023-07-27T17:02:07.423+00:00",
                    "updatedAt": "2023-07-27T17:02:07.423+00:00"
                  },
                  {
                    "id": 24,
                    "paymentIntentId": "pi_3NYXZgA855UbDdxy1H9WlGJk",
                    "userId": 1,
                    "status": null,
                    "soldBy": "Test Connected Account",
                    "product": {
                      "productId": 170,
                      "stripePriceId": "price_1NTpBpA855UbDdxyTnxDN8F5",
                      "productName": "Test Connected Acc Product 2",
                      "productDescription": "Test Connected Acc",
                      "soldByCompanyId": 1734,
                      "soldByCompanyName": null,
                      "specs": {
                        "defaultImage": "layout/images/metaihemp.png"
                      },
                      "quantity": 4,
                      "unitPrice": 40,
                      "totalPrice": 160
                    },
                    "total": 160,
                    "datePurchased": "2023-07-27T17:02:09.923+00:00",
                    "createdAt": "2023-07-27T17:02:09.923+00:00",
                    "updatedAt": "2023-07-27T17:02:09.923+00:00"
                  }
                ],
                "shipToName": null,
                "shipToAddress": null,
                "subTotal": 272,
                "tax": 0,
                "processingFee": 22,
                "grandTotal": 295,
                "status": "processing",
                "datePurchased": "2023-07-27T17:02:12.071+00:00"
              }
            ],
            "pageable": {
              "sort": {
                "unsorted": true,
                "sorted": false,
                "empty": true
              },
              "pageNumber": 0,
              "pageSize": 2,
              "offset": 0,
              "paged": true,
              "unpaged": false
            },
            "totalElements": 3,
            "totalPages": 2,
            "last": false,
            "numberOfElements": 2,
            "size": 2,
            "number": 0,
            "sort": {
              "unsorted": true,
              "sorted": false,
              "empty": true
            },
            "first": true,
            "empty": false
          }
    }
    fetchProducts() {
      return {
        "content": [
            {
                "id": 30,
                "stripePriceId": "price_1Nz5X8A855UbDdxyOCBagmqf",
                "name": "Test 45",
                "description": "Test",
                "type": null,
                "thumbnail": {
                    "id": 24,
                    "name": "IMG_4282.jpg",
                    "position": 0,
                    "s3Location": "https://hk-media-staging1.s3.us-east-2.amazonaws.com/Cedar+Meadows+Farms/Test+45/IMG_4282.jpg",
                    "imageKey": "Cedar Meadows Farms/Test 45/IMG_4282.jpg",
                    "thumbnail": null,
                    "image": null
                },
                "images": [],
                "certificates": [],
                "price": 100,
                "pricePerWeight": "lbs",
                "quantity": 200.0,
                "quantityWeightMeasurement": "lbs",
                "enabled": true,
                "createdAt": 1696804390006,
                "updatedAt": 1696804390006,
                "attributes": {
                    "defaultImage": ""
                },
                "company": {
                    "id": 3017,
                    "stripeCustomerId": null,
                    "stripeConnectedAccId": null,
                    "name": "Cedar Meadows Farms",
                    "phoneNumber": null,
                    "website": null,
                    "supportEmail": null,
                    "logo": null,
                    "balance": 0,
                    "totalRevenue": 0,
                    "type": [
                        "FARMER"
                    ],
                    "latitude": null,
                    "longitude": null,
                    "createdAt": 1685577566505,
                    "updatedAt": 1685577566505,
                    "approvalStatus": "APPROVED",
                    "enabled": true,
                    "ownerId": 8,
                    "farmerAttributes": {
                        "id": 7532,
                        "licenseType": null,
                        "licenseIssueDate": null,
                        "licenseStatus": null,
                        "licenseNumber": null,
                        "descriptionOfFarm": null,
                        "hempVariety": [],
                        "bales": [],
                        "hempType": null,
                        "certificationBy": null,
                        "ownTrucking": true,
                        "balesAvailable": null,
                        "weightPerBale": null,
                        "previousCrop": null,
                        "seedingRate": null,
                        "rowSpaceInches": null,
                        "pesticidesUsed": [],
                        "weatherInGeneral": null,
                        "fertilizerUsed": [],
                        "estimatedWeeds": null,
                        "totalAcreForGrowingIHemp": null,
                        "totalAcreCurrentlyUnderContract": null,
                        "region": null
                    },
                    "manufacturesAttributes": {
                        "id": 7533,
                        "targetTypeOfOutput": null,
                        "descriptionOfManufacturer": null,
                        "deliverySchedule": null,
                        "regions": null
                    },
                    "processorAttributes": {
                        "id": 7534,
                        "totalCapacityPerDayInTons": null,
                        "numberOfShiftsBeingUsed": null,
                        "annualTonsUnderContract": null,
                        "totalAnnualTonsAvailableToMarket": null,
                        "regions": [],
                        "baleTypePreferred": null,
                        "targetTypeOfOutput": null,
                        "siteUtilization": null,
                        "descriptionOfProcessing": null,
                        "supportedIndustries": []
                    },
                    "specRequests": [],
                    "addresses": [
                        {
                            "id": 7540,
                            "addressOne": "535 Drytown Rd,",
                            "addressTwo": "",
                            "city": "Holtwood,",
                            "state": "PA ",
                            "zipcode": "17532",
                            "country": "",
                            "primaryAddress": true
                        }
                    ]
                },
                "productDetails": {
                    "acres": null,
                    "seed": [
                        "Shanghai"
                    ],
                    "fieldName": "N2",
                    "baleType": "Square",
                    "weightPerBale": 850.0,
                    "weightMeasurement": "lbs",
                    "seedsPerAcre": 155.0,
                    "seedMeasurement": "lbs",
                    "rowSpaceInInches": 15.0,
                    "pesticidesUsedGallonsPerAcre": 0.0,
                    "estimatedWeeds": "average",
                    "targetHempType": "Hurd",
                    "estimatedTonsPerAcre": 0.0,
                    "estimatedTotalTons": null,
                    "seedingMethod": "Drill",
                    "branchedStalks": null,
                    "harvestTime": null,
                    "mold": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "rettingOnWetDays": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "rettingOnDryDays": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "rettingOnModerateDays": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "percentageOfContractedAcres": 40.0,
                    "estimatedTotalContractedTons": null,
                    "tillagePractice": null,
                    "coverCrops": true,
                    "typesOfCoverCrops": [
                        "Wheat",
                        "Rye",
                        "Barley"
                    ],
                    "terminationOfCoverCrops": [
                        "Burndown",
                        "Reduced rate burndown herbicide"
                    ],
                    "descriptionOfTermination": null,
                    "datePlanted": null,
                    "expectedHarvestDate": null
                },
                "specs": {
                    "type": "",
                    "contractedTons": 0.0,
                    "hurdContentPercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "fmPercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "dustPercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "lengthMM": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "diameterMM": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "moisturePercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "color": "none",
                    "powder": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "microns": 0,
                    "grade": null,
                    "categoryOfLength": "",
                    "process": "raw",
                    "mold": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "fiberState": null,
                    "unopenedStraps": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "shippingContainer": "",
                    "shippingPackage": null,
                    "shippingInstruction": ""
                }
            },
            {
                "id": 29,
                "stripePriceId": "price_1Nz4m1A855UbDdxyVzN1gpwP",
                "name": "dropdown test",
                "description": "",
                "type": null,
                "thumbnail": {
                    "id": 23,
                    "name": "avatarHemp.png",
                    "position": 0,
                    "s3Location": "https://hk-media-staging1.s3.us-east-2.amazonaws.com/Cedar+Meadows+Farms/dropdown+test/avatarHemp.png",
                    "imageKey": "Cedar Meadows Farms/dropdown test/avatarHemp.png",
                    "thumbnail": null,
                    "image": null
                },
                "images": [],
                "certificates": [],
                "price": 0,
                "pricePerWeight": "lbs",
                "quantity": 0.0,
                "quantityWeightMeasurement": "lbs",
                "enabled": true,
                "createdAt": 1696801468690,
                "updatedAt": 1696801468690,
                "attributes": {
                    "defaultImage": ""
                },
                "company": {
                    "id": 3017,
                    "stripeCustomerId": null,
                    "stripeConnectedAccId": null,
                    "name": "Cedar Meadows Farms",
                    "phoneNumber": null,
                    "website": null,
                    "supportEmail": null,
                    "logo": null,
                    "balance": 0,
                    "totalRevenue": 0,
                    "type": [
                        "FARMER"
                    ],
                    "latitude": null,
                    "longitude": null,
                    "createdAt": 1685577566505,
                    "updatedAt": 1685577566505,
                    "approvalStatus": "APPROVED",
                    "enabled": true,
                    "ownerId": 8,
                    "farmerAttributes": {
                        "id": 7532,
                        "licenseType": null,
                        "licenseIssueDate": null,
                        "licenseStatus": null,
                        "licenseNumber": null,
                        "descriptionOfFarm": null,
                        "hempVariety": [],
                        "bales": [],
                        "hempType": null,
                        "certificationBy": null,
                        "ownTrucking": true,
                        "balesAvailable": null,
                        "weightPerBale": null,
                        "previousCrop": null,
                        "seedingRate": null,
                        "rowSpaceInches": null,
                        "pesticidesUsed": [],
                        "weatherInGeneral": null,
                        "fertilizerUsed": [],
                        "estimatedWeeds": null,
                        "totalAcreForGrowingIHemp": null,
                        "totalAcreCurrentlyUnderContract": null,
                        "region": null
                    },
                    "manufacturesAttributes": {
                        "id": 7533,
                        "targetTypeOfOutput": null,
                        "descriptionOfManufacturer": null,
                        "deliverySchedule": null,
                        "regions": null
                    },
                    "processorAttributes": {
                        "id": 7534,
                        "totalCapacityPerDayInTons": null,
                        "numberOfShiftsBeingUsed": null,
                        "annualTonsUnderContract": null,
                        "totalAnnualTonsAvailableToMarket": null,
                        "regions": [],
                        "baleTypePreferred": null,
                        "targetTypeOfOutput": null,
                        "siteUtilization": null,
                        "descriptionOfProcessing": null,
                        "supportedIndustries": []
                    },
                    "specRequests": [],
                    "addresses": [
                        {
                            "id": 7540,
                            "addressOne": "535 Drytown Rd,",
                            "addressTwo": "",
                            "city": "Holtwood,",
                            "state": "PA ",
                            "zipcode": "17532",
                            "country": "",
                            "primaryAddress": true
                        }
                    ]
                },
                "productDetails": {
                    "acres": null,
                    "seed": [
                        "Futura 75"
                    ],
                    "fieldName": "",
                    "baleType": "Square",
                    "weightPerBale": 0.0,
                    "weightMeasurement": "tons",
                    "seedsPerAcre": 0.0,
                    "seedMeasurement": "lbs",
                    "rowSpaceInInches": 15.0,
                    "pesticidesUsedGallonsPerAcre": 0.0,
                    "estimatedWeeds": null,
                    "targetHempType": "Fiber",
                    "estimatedTonsPerAcre": 0.0,
                    "estimatedTotalTons": null,
                    "seedingMethod": "Precision Planter",
                    "branchedStalks": "Lots",
                    "harvestTime": null,
                    "mold": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "rettingOnWetDays": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "rettingOnDryDays": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "rettingOnModerateDays": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "percentageOfContractedAcres": 0.0,
                    "estimatedTotalContractedTons": null,
                    "tillagePractice": "No-Till",
                    "coverCrops": true,
                    "typesOfCoverCrops": [
                        "Wheat"
                    ],
                    "terminationOfCoverCrops": [
                        "Reduced rate burndown herbicide"
                    ],
                    "descriptionOfTermination": null,
                    "datePlanted": null,
                    "expectedHarvestDate": null
                },
                "specs": {
                    "type": "",
                    "contractedTons": 0.0,
                    "hurdContentPercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "fmPercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "dustPercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "lengthMM": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "diameterMM": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "moisturePercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "color": "none",
                    "powder": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "microns": 0,
                    "grade": null,
                    "categoryOfLength": "",
                    "process": "raw",
                    "mold": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "fiberState": null,
                    "unopenedStraps": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "shippingContainer": "",
                    "shippingPackage": null,
                    "shippingInstruction": ""
                }
            },
            {
                "id": 27,
                "stripePriceId": "price_1NxeWdA855UbDdxy9bTSJ1Lr",
                "name": "test",
                "description": "test",
                "type": null,
                "thumbnail": {
                    "id": 21,
                    "name": "metaihemp.png",
                    "position": 0,
                    "s3Location": "https://hk-media-staging1.s3.us-east-2.amazonaws.com/Cedar+Meadows+Farms/test/metaihemp.png",
                    "imageKey": "Cedar Meadows Farms/test/metaihemp.png",
                    "thumbnail": null,
                    "image": null
                },
                "images": [],
                "certificates": [],
                "price": 0,
                "pricePerWeight": "lbs",
                "quantity": 0.0,
                "quantityWeightMeasurement": "lbs",
                "enabled": true,
                "createdAt": 1696462242653,
                "updatedAt": 1696462242653,
                "attributes": {
                    "defaultImage": ""
                },
                "company": {
                    "id": 3017,
                    "stripeCustomerId": null,
                    "stripeConnectedAccId": null,
                    "name": "Cedar Meadows Farms",
                    "phoneNumber": null,
                    "website": null,
                    "supportEmail": null,
                    "logo": null,
                    "balance": 0,
                    "totalRevenue": 0,
                    "type": [
                        "FARMER"
                    ],
                    "latitude": null,
                    "longitude": null,
                    "createdAt": 1685577566505,
                    "updatedAt": 1685577566505,
                    "approvalStatus": "APPROVED",
                    "enabled": true,
                    "ownerId": 8,
                    "farmerAttributes": {
                        "id": 7532,
                        "licenseType": null,
                        "licenseIssueDate": null,
                        "licenseStatus": null,
                        "licenseNumber": null,
                        "descriptionOfFarm": null,
                        "hempVariety": [],
                        "bales": [],
                        "hempType": null,
                        "certificationBy": null,
                        "ownTrucking": true,
                        "balesAvailable": null,
                        "weightPerBale": null,
                        "previousCrop": null,
                        "seedingRate": null,
                        "rowSpaceInches": null,
                        "pesticidesUsed": [],
                        "weatherInGeneral": null,
                        "fertilizerUsed": [],
                        "estimatedWeeds": null,
                        "totalAcreForGrowingIHemp": null,
                        "totalAcreCurrentlyUnderContract": null,
                        "region": null
                    },
                    "manufacturesAttributes": {
                        "id": 7533,
                        "targetTypeOfOutput": null,
                        "descriptionOfManufacturer": null,
                        "deliverySchedule": null,
                        "regions": null
                    },
                    "processorAttributes": {
                        "id": 7534,
                        "totalCapacityPerDayInTons": null,
                        "numberOfShiftsBeingUsed": null,
                        "annualTonsUnderContract": null,
                        "totalAnnualTonsAvailableToMarket": null,
                        "regions": [],
                        "baleTypePreferred": null,
                        "targetTypeOfOutput": null,
                        "siteUtilization": null,
                        "descriptionOfProcessing": null,
                        "supportedIndustries": []
                    },
                    "specRequests": [],
                    "addresses": [
                        {
                            "id": 7540,
                            "addressOne": "535 Drytown Rd,",
                            "addressTwo": "",
                            "city": "Holtwood,",
                            "state": "PA ",
                            "zipcode": "17532",
                            "country": "",
                            "primaryAddress": true
                        }
                    ]
                },
                "productDetails": {
                    "acres": null,
                    "seed": [
                        ""
                    ],
                    "fieldName": "",
                    "baleType": null,
                    "weightPerBale": 0.0,
                    "weightMeasurement": null,
                    "seedsPerAcre": 0.0,
                    "seedMeasurement": "lbs",
                    "rowSpaceInInches": 0.0,
                    "pesticidesUsedGallonsPerAcre": 0.0,
                    "estimatedWeeds": null,
                    "targetHempType": null,
                    "estimatedTonsPerAcre": 0.0,
                    "estimatedTotalTons": null,
                    "seedingMethod": "",
                    "branchedStalks": null,
                    "harvestTime": null,
                    "mold": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "rettingOnWetDays": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "rettingOnDryDays": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "rettingOnModerateDays": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "percentageOfContractedAcres": 0.0,
                    "estimatedTotalContractedTons": null,
                    "tillagePractice": null,
                    "coverCrops": true,
                    "typesOfCoverCrops": [],
                    "terminationOfCoverCrops": [],
                    "descriptionOfTermination": null,
                    "datePlanted": null,
                    "expectedHarvestDate": null
                },
                "specs": {
                    "type": "",
                    "contractedTons": 0.0,
                    "hurdContentPercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "fmPercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "dustPercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "lengthMM": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "diameterMM": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "moisturePercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "color": "none",
                    "powder": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "microns": 0,
                    "grade": null,
                    "categoryOfLength": "",
                    "process": "raw",
                    "mold": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "fiberState": null,
                    "unopenedStraps": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "shippingContainer": "",
                    "shippingPackage": null,
                    "shippingInstruction": ""
                }
            },
            {
                "id": 15,
                "stripePriceId": null,
                "name": "N-1 YUMA ",
                "description": "The yield will be for fiber ",
                "type": null,
                "thumbnail": {
                    "id": 8,
                    "name": "thumbnail_IMG_3925.jpg",
                    "position": 0,
                    "s3Location": "https://hk-media-staging1.s3.us-east-2.amazonaws.com/Cedar+Meadows+Farms/N-1+YUMA+/thumbnail_IMG_3925.jpg",
                    "imageKey": "Cedar Meadows Farms/N-1 YUMA /thumbnail_IMG_3925.jpg",
                    "thumbnail": null,
                    "image": null
                },
                "images": [],
                "certificates": null,
                "price": 0.18,
                "pricePerWeight": "bales",
                "quantity": 4000.0,
                "quantityWeightMeasurement": "bales",
                "enabled": true,
                "createdAt": 1686013800476,
                "updatedAt": 1686013800476,
                "attributes": {
                    "defaultImage": "layout/images/metaihemp.png"
                },
                "company": {
                    "id": 3017,
                    "stripeCustomerId": null,
                    "stripeConnectedAccId": null,
                    "name": "Cedar Meadows Farms",
                    "phoneNumber": null,
                    "website": null,
                    "supportEmail": null,
                    "logo": null,
                    "balance": 0,
                    "totalRevenue": 0,
                    "type": [
                        "FARMER"
                    ],
                    "latitude": null,
                    "longitude": null,
                    "createdAt": 1685577566505,
                    "updatedAt": 1685577566505,
                    "approvalStatus": "APPROVED",
                    "enabled": true,
                    "ownerId": 8,
                    "farmerAttributes": {
                        "id": 7532,
                        "licenseType": null,
                        "licenseIssueDate": null,
                        "licenseStatus": null,
                        "licenseNumber": null,
                        "descriptionOfFarm": null,
                        "hempVariety": [],
                        "bales": [],
                        "hempType": null,
                        "certificationBy": null,
                        "ownTrucking": true,
                        "balesAvailable": null,
                        "weightPerBale": null,
                        "previousCrop": null,
                        "seedingRate": null,
                        "rowSpaceInches": null,
                        "pesticidesUsed": [],
                        "weatherInGeneral": null,
                        "fertilizerUsed": [],
                        "estimatedWeeds": null,
                        "totalAcreForGrowingIHemp": null,
                        "totalAcreCurrentlyUnderContract": null,
                        "region": null
                    },
                    "manufacturesAttributes": {
                        "id": 7533,
                        "targetTypeOfOutput": null,
                        "descriptionOfManufacturer": null,
                        "deliverySchedule": null,
                        "regions": null
                    },
                    "processorAttributes": {
                        "id": 7534,
                        "totalCapacityPerDayInTons": null,
                        "numberOfShiftsBeingUsed": null,
                        "annualTonsUnderContract": null,
                        "totalAnnualTonsAvailableToMarket": null,
                        "regions": [],
                        "baleTypePreferred": null,
                        "targetTypeOfOutput": null,
                        "siteUtilization": null,
                        "descriptionOfProcessing": null,
                        "supportedIndustries": []
                    },
                    "specRequests": [],
                    "addresses": [
                        {
                            "id": 7540,
                            "addressOne": "535 Drytown Rd,",
                            "addressTwo": "",
                            "city": "Holtwood,",
                            "state": "PA ",
                            "zipcode": "17532",
                            "country": "",
                            "primaryAddress": true
                        }
                    ]
                },
                "productDetails": {
                    "acres": 465.0,
                    "seed": [
                        "Yuma"
                    ],
                    "fieldName": "N-!",
                    "baleType": "Round",
                    "weightPerBale": 200.0,
                    "weightMeasurement": "lbs",
                    "seedsPerAcre": null,
                    "seedMeasurement": null,
                    "rowSpaceInInches": 15.0,
                    "pesticidesUsedGallonsPerAcre": 0.0,
                    "estimatedWeeds": null,
                    "targetHempType": null,
                    "estimatedTonsPerAcre": 3.0,
                    "estimatedTotalTons": 1395,
                    "seedingMethod": "",
                    "branchedStalks": null,
                    "harvestTime": null,
                    "mold": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "rettingOnWetDays": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "rettingOnDryDays": {
                        "lessThan": 6.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "rettingOnModerateDays": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "percentageOfContractedAcres": 12.0,
                    "estimatedTotalContractedTons": 55,
                    "tillagePractice": null,
                    "coverCrops": null,
                    "typesOfCoverCrops": null,
                    "terminationOfCoverCrops": null,
                    "descriptionOfTermination": null,
                    "datePlanted": null,
                    "expectedHarvestDate": null
                },
                "specs": {
                    "type": null,
                    "contractedTons": null,
                    "hurdContentPercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "fmPercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "dustPercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "lengthMM": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "diameterMM": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "moisturePercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "color": "none",
                    "powder": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "microns": 0,
                    "grade": null,
                    "categoryOfLength": "",
                    "process": "raw",
                    "mold": null,
                    "fiberState": null,
                    "unopenedStraps": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "shippingContainer": "",
                    "shippingPackage": null,
                    "shippingInstruction": ""
                }
            },
            {
                "id": 6,
                "stripePriceId": null,
                "name": "Muka 76 for Fiber ",
                "description": "3 Acres Genetics grown for high quality fiber",
                "type": null,
                "thumbnail": {
                    "id": 18,
                    "name": "hemp row and spacing.jpg",
                    "position": 0,
                    "s3Location": "https://hk-media-staging1.s3.us-east-2.amazonaws.com/Cedar+Meadows+Farms/Muka+76+for+Fiber+/hemp+row+and+spacing.jpg",
                    "imageKey": "Cedar Meadows Farms/Muka 76 for Fiber /hemp row and spacing.jpg",
                    "thumbnail": null,
                    "image": null
                },
                "images": [],
                "certificates": null,
                "price": 0.2,
                "pricePerWeight": "bales",
                "quantity": 3000.0,
                "quantityWeightMeasurement": "bales",
                "enabled": true,
                "createdAt": 1685659664333,
                "updatedAt": 1685659664333,
                "attributes": {
                    "defaultImage": "layout/images/metaihemp.png"
                },
                "company": {
                    "id": 3017,
                    "stripeCustomerId": null,
                    "stripeConnectedAccId": null,
                    "name": "Cedar Meadows Farms",
                    "phoneNumber": null,
                    "website": null,
                    "supportEmail": null,
                    "logo": null,
                    "balance": 0,
                    "totalRevenue": 0,
                    "type": [
                        "FARMER"
                    ],
                    "latitude": null,
                    "longitude": null,
                    "createdAt": 1685577566505,
                    "updatedAt": 1685577566505,
                    "approvalStatus": "APPROVED",
                    "enabled": true,
                    "ownerId": 8,
                    "farmerAttributes": {
                        "id": 7532,
                        "licenseType": null,
                        "licenseIssueDate": null,
                        "licenseStatus": null,
                        "licenseNumber": null,
                        "descriptionOfFarm": null,
                        "hempVariety": [],
                        "bales": [],
                        "hempType": null,
                        "certificationBy": null,
                        "ownTrucking": true,
                        "balesAvailable": null,
                        "weightPerBale": null,
                        "previousCrop": null,
                        "seedingRate": null,
                        "rowSpaceInches": null,
                        "pesticidesUsed": [],
                        "weatherInGeneral": null,
                        "fertilizerUsed": [],
                        "estimatedWeeds": null,
                        "totalAcreForGrowingIHemp": null,
                        "totalAcreCurrentlyUnderContract": null,
                        "region": null
                    },
                    "manufacturesAttributes": {
                        "id": 7533,
                        "targetTypeOfOutput": null,
                        "descriptionOfManufacturer": null,
                        "deliverySchedule": null,
                        "regions": null
                    },
                    "processorAttributes": {
                        "id": 7534,
                        "totalCapacityPerDayInTons": null,
                        "numberOfShiftsBeingUsed": null,
                        "annualTonsUnderContract": null,
                        "totalAnnualTonsAvailableToMarket": null,
                        "regions": [],
                        "baleTypePreferred": null,
                        "targetTypeOfOutput": null,
                        "siteUtilization": null,
                        "descriptionOfProcessing": null,
                        "supportedIndustries": []
                    },
                    "specRequests": [],
                    "addresses": [
                        {
                            "id": 7540,
                            "addressOne": "535 Drytown Rd,",
                            "addressTwo": "",
                            "city": "Holtwood,",
                            "state": "PA ",
                            "zipcode": "17532",
                            "country": "",
                            "primaryAddress": true
                        }
                    ]
                },
                "productDetails": {
                    "acres": null,
                    "seed": [
                        "Muka 76"
                    ],
                    "fieldName": "R2",
                    "baleType": "Round",
                    "weightPerBale": 0.0,
                    "weightMeasurement": null,
                    "seedsPerAcre": null,
                    "seedMeasurement": null,
                    "rowSpaceInInches": 2.0,
                    "pesticidesUsedGallonsPerAcre": 0.0,
                    "estimatedWeeds": "few",
                    "targetHempType": "Fiber",
                    "estimatedTonsPerAcre": 2.5,
                    "estimatedTotalTons": null,
                    "seedingMethod": null,
                    "branchedStalks": null,
                    "harvestTime": null,
                    "mold": null,
                    "rettingOnWetDays": null,
                    "rettingOnDryDays": null,
                    "rettingOnModerateDays": null,
                    "percentageOfContractedAcres": null,
                    "estimatedTotalContractedTons": null,
                    "tillagePractice": null,
                    "coverCrops": null,
                    "typesOfCoverCrops": null,
                    "terminationOfCoverCrops": null,
                    "descriptionOfTermination": null,
                    "datePlanted": 1684296000000,
                    "expectedHarvestDate": 1693800000000
                },
                "specs": {
                    "type": null,
                    "contractedTons": null,
                    "hurdContentPercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "fmPercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "dustPercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "lengthMM": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "diameterMM": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "moisturePercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "color": "none",
                    "powder": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "microns": 0,
                    "grade": null,
                    "categoryOfLength": "",
                    "process": "raw",
                    "mold": null,
                    "fiberState": null,
                    "unopenedStraps": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "shippingContainer": "",
                    "shippingPackage": null,
                    "shippingInstruction": ""
                }
            },
            {
                "id": 2,
                "stripePriceId": null,
                "name": "Futura 83",
                "description": "3 Acres This genetics is grown for Hurd",
                "type": null,
                "thumbnail": {
                    "id": 19,
                    "name": "hemp stalk compares to person.jpg",
                    "position": 0,
                    "s3Location": "https://hk-media-staging1.s3.us-east-2.amazonaws.com/Cedar+Meadows+Farms/Futura+83/hemp+stalk+compares+to+person.jpg",
                    "imageKey": "Cedar Meadows Farms/Futura 83/hemp stalk compares to person.jpg",
                    "thumbnail": null,
                    "image": null
                },
                "images": [],
                "certificates": null,
                "price": 0.2,
                "pricePerWeight": null,
                "quantity": null,
                "quantityWeightMeasurement": null,
                "enabled": true,
                "createdAt": 1685584085025,
                "updatedAt": 1685584085025,
                "attributes": {
                    "defaultImage": "layout/images/metaihemp.png"
                },
                "company": {
                    "id": 3017,
                    "stripeCustomerId": null,
                    "stripeConnectedAccId": null,
                    "name": "Cedar Meadows Farms",
                    "phoneNumber": null,
                    "website": null,
                    "supportEmail": null,
                    "logo": null,
                    "balance": 0,
                    "totalRevenue": 0,
                    "type": [
                        "FARMER"
                    ],
                    "latitude": null,
                    "longitude": null,
                    "createdAt": 1685577566505,
                    "updatedAt": 1685577566505,
                    "approvalStatus": "APPROVED",
                    "enabled": true,
                    "ownerId": 8,
                    "farmerAttributes": {
                        "id": 7532,
                        "licenseType": null,
                        "licenseIssueDate": null,
                        "licenseStatus": null,
                        "licenseNumber": null,
                        "descriptionOfFarm": null,
                        "hempVariety": [],
                        "bales": [],
                        "hempType": null,
                        "certificationBy": null,
                        "ownTrucking": true,
                        "balesAvailable": null,
                        "weightPerBale": null,
                        "previousCrop": null,
                        "seedingRate": null,
                        "rowSpaceInches": null,
                        "pesticidesUsed": [],
                        "weatherInGeneral": null,
                        "fertilizerUsed": [],
                        "estimatedWeeds": null,
                        "totalAcreForGrowingIHemp": null,
                        "totalAcreCurrentlyUnderContract": null,
                        "region": null
                    },
                    "manufacturesAttributes": {
                        "id": 7533,
                        "targetTypeOfOutput": null,
                        "descriptionOfManufacturer": null,
                        "deliverySchedule": null,
                        "regions": null
                    },
                    "processorAttributes": {
                        "id": 7534,
                        "totalCapacityPerDayInTons": null,
                        "numberOfShiftsBeingUsed": null,
                        "annualTonsUnderContract": null,
                        "totalAnnualTonsAvailableToMarket": null,
                        "regions": [],
                        "baleTypePreferred": null,
                        "targetTypeOfOutput": null,
                        "siteUtilization": null,
                        "descriptionOfProcessing": null,
                        "supportedIndustries": []
                    },
                    "specRequests": [],
                    "addresses": [
                        {
                            "id": 7540,
                            "addressOne": "535 Drytown Rd,",
                            "addressTwo": "",
                            "city": "Holtwood,",
                            "state": "PA ",
                            "zipcode": "17532",
                            "country": "",
                            "primaryAddress": true
                        }
                    ]
                },
                "productDetails": {
                    "acres": null,
                    "seed": [
                        "Futura 83"
                    ],
                    "fieldName": "N-1",
                    "baleType": "Round",
                    "weightPerBale": 450.0,
                    "weightMeasurement": "lbs",
                    "seedsPerAcre": null,
                    "seedMeasurement": null,
                    "rowSpaceInInches": 15.0,
                    "pesticidesUsedGallonsPerAcre": 0.0,
                    "estimatedWeeds": "few",
                    "targetHempType": "Hurd",
                    "estimatedTonsPerAcre": 3.0,
                    "estimatedTotalTons": null,
                    "seedingMethod": null,
                    "branchedStalks": null,
                    "harvestTime": null,
                    "mold": null,
                    "rettingOnWetDays": null,
                    "rettingOnDryDays": null,
                    "rettingOnModerateDays": null,
                    "percentageOfContractedAcres": null,
                    "estimatedTotalContractedTons": null,
                    "tillagePractice": null,
                    "coverCrops": null,
                    "typesOfCoverCrops": null,
                    "terminationOfCoverCrops": null,
                    "descriptionOfTermination": null,
                    "datePlanted": 1684296000000,
                    "expectedHarvestDate": 1694664000000
                },
                "specs": {
                    "type": null,
                    "contractedTons": null,
                    "hurdContentPercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "fmPercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "dustPercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "lengthMM": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "diameterMM": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "moisturePercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "color": "none",
                    "powder": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "microns": 0,
                    "grade": null,
                    "categoryOfLength": "",
                    "process": "raw",
                    "mold": null,
                    "fiberState": null,
                    "unopenedStraps": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "shippingContainer": "",
                    "shippingPackage": null,
                    "shippingInstruction": ""
                }
            },
            {
                "id": 1,
                "stripePriceId": null,
                "name": "YUMA",
                "description": "50 Acres YUMA grown for specific high-quality fiber ",
                "type": null,
                "thumbnail": {
                    "id": 20,
                    "name": "height.jpg",
                    "position": 0,
                    "s3Location": "https://hk-media-staging1.s3.us-east-2.amazonaws.com/Cedar+Meadows+Farms/YUMA/height.jpg",
                    "imageKey": "Cedar Meadows Farms/YUMA/height.jpg",
                    "thumbnail": null,
                    "image": null
                },
                "images": [],
                "certificates": null,
                "price": 0.2,
                "pricePerWeight": null,
                "quantity": 200.0,
                "quantityWeightMeasurement": "acres",
                "enabled": true,
                "createdAt": 1685583893829,
                "updatedAt": 1685583893829,
                "attributes": {
                    "defaultImage": "layout/images/metaihemp.png"
                },
                "company": {
                    "id": 3017,
                    "stripeCustomerId": null,
                    "stripeConnectedAccId": null,
                    "name": "Cedar Meadows Farms",
                    "phoneNumber": null,
                    "website": null,
                    "supportEmail": null,
                    "logo": null,
                    "balance": 0,
                    "totalRevenue": 0,
                    "type": [
                        "FARMER"
                    ],
                    "latitude": null,
                    "longitude": null,
                    "createdAt": 1685577566505,
                    "updatedAt": 1685577566505,
                    "approvalStatus": "APPROVED",
                    "enabled": true,
                    "ownerId": 8,
                    "farmerAttributes": {
                        "id": 7532,
                        "licenseType": null,
                        "licenseIssueDate": null,
                        "licenseStatus": null,
                        "licenseNumber": null,
                        "descriptionOfFarm": null,
                        "hempVariety": [],
                        "bales": [],
                        "hempType": null,
                        "certificationBy": null,
                        "ownTrucking": true,
                        "balesAvailable": null,
                        "weightPerBale": null,
                        "previousCrop": null,
                        "seedingRate": null,
                        "rowSpaceInches": null,
                        "pesticidesUsed": [],
                        "weatherInGeneral": null,
                        "fertilizerUsed": [],
                        "estimatedWeeds": null,
                        "totalAcreForGrowingIHemp": null,
                        "totalAcreCurrentlyUnderContract": null,
                        "region": null
                    },
                    "manufacturesAttributes": {
                        "id": 7533,
                        "targetTypeOfOutput": null,
                        "descriptionOfManufacturer": null,
                        "deliverySchedule": null,
                        "regions": null
                    },
                    "processorAttributes": {
                        "id": 7534,
                        "totalCapacityPerDayInTons": null,
                        "numberOfShiftsBeingUsed": null,
                        "annualTonsUnderContract": null,
                        "totalAnnualTonsAvailableToMarket": null,
                        "regions": [],
                        "baleTypePreferred": null,
                        "targetTypeOfOutput": null,
                        "siteUtilization": null,
                        "descriptionOfProcessing": null,
                        "supportedIndustries": []
                    },
                    "specRequests": [],
                    "addresses": [
                        {
                            "id": 7540,
                            "addressOne": "535 Drytown Rd,",
                            "addressTwo": "",
                            "city": "Holtwood,",
                            "state": "PA ",
                            "zipcode": "17532",
                            "country": "",
                            "primaryAddress": true
                        }
                    ]
                },
                "productDetails": {
                    "acres": null,
                    "seed": [
                        "Yuma"
                    ],
                    "fieldName": "R-1",
                    "baleType": "Round",
                    "weightPerBale": 0.0,
                    "weightMeasurement": null,
                    "seedsPerAcre": null,
                    "seedMeasurement": null,
                    "rowSpaceInInches": 2.0,
                    "pesticidesUsedGallonsPerAcre": 0.0,
                    "estimatedWeeds": "few",
                    "targetHempType": "Fiber",
                    "estimatedTonsPerAcre": 2.7,
                    "estimatedTotalTons": null,
                    "seedingMethod": null,
                    "branchedStalks": null,
                    "harvestTime": null,
                    "mold": null,
                    "rettingOnWetDays": null,
                    "rettingOnDryDays": null,
                    "rettingOnModerateDays": null,
                    "percentageOfContractedAcres": null,
                    "estimatedTotalContractedTons": null,
                    "tillagePractice": null,
                    "coverCrops": null,
                    "typesOfCoverCrops": null,
                    "terminationOfCoverCrops": null,
                    "descriptionOfTermination": null,
                    "datePlanted": 1684296000000,
                    "expectedHarvestDate": 1693454400000
                },
                "specs": {
                    "type": null,
                    "contractedTons": null,
                    "hurdContentPercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "fmPercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "dustPercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "lengthMM": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "diameterMM": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "moisturePercentage": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "color": "none",
                    "powder": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "microns": 0,
                    "grade": null,
                    "categoryOfLength": "",
                    "process": "raw",
                    "mold": null,
                    "fiberState": null,
                    "unopenedStraps": {
                        "lessThan": 0.0,
                        "moreThan": 0.0,
                        "between": []
                    },
                    "shippingContainer": "",
                    "shippingPackage": null,
                    "shippingInstruction": ""
                }
            }
        ],
        "pageable": {
            "sort": {
                "unsorted": false,
                "sorted": true,
                "empty": false
            },
            "pageNumber": 0,
            "pageSize": 9,
            "offset": 0,
            "paged": true,
            "unpaged": false
        },
        "totalPages": 1,
        "totalElements": 7,
        "last": true,
        "numberOfElements": 7,
        "size": 9,
        "number": 0,
        "sort": {
            "unsorted": false,
            "sorted": true,
            "empty": false
        },
        "first": true,
        "empty": false
    }
    }
    fetchSIC() {
        return {"content":[{"id":1,"sicCode":100,"office":"Industrial Applications and Services","industryTitle":"AGRICULTURAL PRODUCTION-CROPS"},{"id":2,"sicCode":200,"office":"Industrial Applications and Services","industryTitle":"AGRICULTURAL PROD-LIVESTOCK & ANIMAL SPECIALTIES"},{"id":3,"sicCode":700,"office":"Industrial Applications and Services","industryTitle":"AGRICULTURAL SERVICES"},{"id":4,"sicCode":800,"office":"Industrial Applications and Services","industryTitle":"FORESTRY"},{"id":5,"sicCode":900,"office":"Industrial Applications and Services","industryTitle":"FISHING, HUNTING AND TRAPPING"},{"id":6,"sicCode":1000,"office":"Office of Energy & Transportation","industryTitle":"METAL MINING"},{"id":7,"sicCode":1040,"office":"Office of Energy & Transportation","industryTitle":"GOLD AND SILVER ORES"},{"id":8,"sicCode":1090,"office":"Office of Energy & Transportation","industryTitle":"MISCELLANEOUS METAL ORES"},{"id":9,"sicCode":1220,"office":"Office of Energy & Transportation","industryTitle":"BITUMINOUS COAL & LIGNITE MINING"},{"id":10,"sicCode":1221,"office":"Office of Energy & Transportation","industryTitle":"BITUMINOUS COAL & LIGNITE SURFACE MINING"},{"id":11,"sicCode":1311,"office":"Office of Energy & Transportation","industryTitle":"CRUDE PETROLEUM & NATURAL GAS"},{"id":12,"sicCode":1381,"office":"Office of Energy & Transportation","industryTitle":"DRILLING OIL & GAS WELLS"},{"id":13,"sicCode":1382,"office":"Office of Energy & Transportation","industryTitle":"OIL & GAS FIELD EXPLORATION SERVICES"},{"id":14,"sicCode":1389,"office":"Office of Energy & Transportation","industryTitle":"OIL & GAS FIELD SERVICES, NEC"},{"id":15,"sicCode":1400,"office":"Office of Energy & Transportation","industryTitle":"MINING & QUARRYING OF NONMETALLIC MINERALS (NO FUELS)"},{"id":16,"sicCode":1520,"office":"Office of Real Estate & Construction","industryTitle":"GENERAL BLDG CONTRACTORS - RESIDENTIAL BLDGS"},{"id":17,"sicCode":1531,"office":"Office of Real Estate & Construction","industryTitle":"OPERATIVE BUILDERS"},{"id":18,"sicCode":1540,"office":"Office of Real Estate & Construction","industryTitle":"GENERAL BLDG CONTRACTORS - NONRESIDENTIAL BLDGS"},{"id":19,"sicCode":1600,"office":"Office of Real Estate & Construction","industryTitle":"HEAVY CONSTRUCTION OTHER THAN BLDG CONST - CONTRACTORS"},{"id":20,"sicCode":1623,"office":"Office of Real Estate & Construction","industryTitle":"WATER, SEWER, PIPELINE, COMM & POWER LINE CONSTRUCTION"},{"id":21,"sicCode":1700,"office":"Office of Real Estate & Construction","industryTitle":"CONSTRUCTION - SPECIAL TRADE CONTRACTORS"},{"id":22,"sicCode":1731,"office":"Office of Real Estate & Construction","industryTitle":"ELECTRICAL WORK"},{"id":23,"sicCode":2000,"office":"Office of Manufacturing","industryTitle":"FOOD AND KINDRED PRODUCTS"},{"id":24,"sicCode":2011,"office":"Office of Manufacturing","industryTitle":"MEAT PACKING PLANTS"},{"id":25,"sicCode":2013,"office":"Office of Manufacturing","industryTitle":"SAUSAGES & OTHER PREPARED MEAT PRODUCTS"},{"id":26,"sicCode":2015,"office":"Office of Manufacturing","industryTitle":"POULTRY SLAUGHTERING AND PROCESSING"},{"id":27,"sicCode":2020,"office":"Office of Manufacturing","industryTitle":"DAIRY PRODUCTS"},{"id":28,"sicCode":2024,"office":"Office of Manufacturing","industryTitle":"ICE CREAM & FROZEN DESSERTS"},{"id":29,"sicCode":2030,"office":"Office of Manufacturing","industryTitle":"CANNED, FROZEN & PRESERVD FRUIT, VEG & FOOD SPECIALTIES"},{"id":30,"sicCode":2033,"office":"Office of Manufacturing","industryTitle":"CANNED, FRUITS, VEG, PRESERVES, JAMS & JELLIES"},{"id":31,"sicCode":2040,"office":"Office of Manufacturing","industryTitle":"GRAIN MILL PRODUCTS"},{"id":32,"sicCode":2050,"office":"Office of Manufacturing","industryTitle":"BAKERY PRODUCTS"},{"id":33,"sicCode":2052,"office":"Office of Manufacturing","industryTitle":"COOKIES & CRACKERS"},{"id":34,"sicCode":2060,"office":"Office of Manufacturing","industryTitle":"SUGAR & CONFECTIONERY PRODUCTS"},{"id":35,"sicCode":2070,"office":"Office of Manufacturing","industryTitle":"FATS & OILS"},{"id":36,"sicCode":2080,"office":"Office of Manufacturing","industryTitle":"BEVERAGES"},{"id":37,"sicCode":2082,"office":"Office of Manufacturing","industryTitle":"MALT BEVERAGES"},{"id":38,"sicCode":2086,"office":"Office of Manufacturing","industryTitle":"BOTTLED & CANNED SOFT DRINKS & CARBONATED WATERS"},{"id":39,"sicCode":2090,"office":"Office of Manufacturing","industryTitle":"MISCELLANEOUS FOOD PREPARATIONS & KINDRED PRODUCTS"},{"id":40,"sicCode":2092,"office":"Office of Manufacturing","industryTitle":"PREPARED FRESH OR FROZEN FISH & SEAFOODS"},{"id":41,"sicCode":2100,"office":"Office of Manufacturing","industryTitle":"TOBACCO PRODUCTS"},{"id":42,"sicCode":2111,"office":"Office of Manufacturing","industryTitle":"CIGARETTES"},{"id":43,"sicCode":2200,"office":"Office of Manufacturing","industryTitle":"TEXTILE MILL PRODUCTS"},{"id":44,"sicCode":2211,"office":"Office of Manufacturing","industryTitle":"BROADWOVEN FABRIC MILLS, COTTON"},{"id":45,"sicCode":2221,"office":"Office of Manufacturing","industryTitle":"BROADWOVEN FABRIC MILLS, MAN MADE FIBER & SILK"},{"id":46,"sicCode":2250,"office":"Office of Manufacturing","industryTitle":"KNITTING MILLS"},{"id":47,"sicCode":2253,"office":"Office of Manufacturing","industryTitle":"KNIT OUTERWEAR MILLS"},{"id":48,"sicCode":2273,"office":"Office of Manufacturing","industryTitle":"CARPETS & RUGS"},{"id":49,"sicCode":2300,"office":"Office of Manufacturing","industryTitle":"APPAREL & OTHER FINISHD PRODS OF FABRICS & SIMILAR MATL"},{"id":50,"sicCode":2320,"office":"Office of Manufacturing","industryTitle":"MEN'S & BOYS' FURNISHGS, WORK CLOTHG, & ALLIED GARMENTS"}],"pageable":{"sort":{"empty":true,"unsorted":true,"sorted":false},"offset":0,"pageNumber":0,"pageSize":50,"paged":true,"unpaged":false},"totalPages":9,"totalElements":443,"last":false,"size":50,"number":0,"sort":{"empty":true,"unsorted":true,"sorted":false},"numberOfElements":50,"first":true,"empty":false}
    }
    searchUsers() {
        return {
            "content": [
                {
                    "id": 14,
                    "stripeCustomerId": null,
                    "firstName": "Michael",
                    "lastName": "barcarse",
                    "email": "Michael.barcarse@gmail.com",
                    "ip": null,
                    "phoneNumber": "8085203280",
                    "approvalStatus": "PENDING",
                    "roles": [
                        "VISITOR"
                    ],
                    "createdDate": "2023-04-12T22:35:27.781+00:00",
                    "lastModified": "2023-04-12T22:35:27.781+00:00",
                    "lastLogin": null,
                    "enabled": true,
                    "permissions": {},
                    "userPreferences": null,
                    "company": {
                        "id": 1525,
                        "stripeCustomerId": null,
                        "name": "test comp",
                        "phoneNumber": null,
                        "website": null,
                        "balance": null,
                        "totalRevenue": null,
                        "type": [],
                        "latitude": null,
                        "longitude": null,
                        "createdAt": "2023-04-12T22:35:27.781+00:00",
                        "updatedAt": "2023-04-12T22:35:27.781+00:00",
                        "approvalStatus": "PENDING",
                        "enabled": false,
                        "ownerId": null,
                        "farmerAttributes": null,
                        "manufacturesAttributes": null,
                        "processorAttributes": null,
                        "specRequests": [],
                        "addresses": []
                    },
                    "addresses": []
                },
                {
                    "id": 2,
                    "stripeCustomerId": null,
                    "firstName": "mike",
                    "lastName": "barcarse",
                    "email": "mbarcarse@digitallantern.com",
                    "ip": "10.150.87.149",
                    "phoneNumber": "8085203280",
                    "approvalStatus": "APPROVED",
                    "roles": [
                        "ADMIN",
                        "COMPANY_ADMIN"
                    ],
                    "createdDate": "2023-04-04T19:32:00.666+00:00",
                    "lastModified": "2023-06-15T00:40:42.620+00:00",
                    "lastLogin": "2023-06-11T23:41:45.601+00:00",
                    "enabled": true,
                    "permissions": {
                        "view:manufactures": true,
                        "view:hemp-ai": true,
                        "view:transporters": false,
                        "view:farmers": false,
                        "view:company_info": false,
                        "create:products": false,
                        "delete:products": false,
                        "view:processors": false,
                        "view:supply_chain_rollup": false,
                        "view:supply_chain_dashboard": false,
                        "view:supplychain_summary": true,
                        "view:product_info": true,
                        "view:other_company_info": false
                    },
                    "userPreferences": null,
                    "company": {
                        "id": 10,
                        "stripeCustomerId": null,
                        "name": "TROPICAL SUNSET FARMS LLC",
                        "phoneNumber": "8085203280",
                        "website": "tropicalsunsetfarms.com",
                        "balance": null,
                        "totalRevenue": null,
                        "type": [
                            "FARMER"
                        ],
                        "latitude": null,
                        "longitude": null,
                        "createdAt": "2023-04-04T15:42:05.299+00:00",
                        "updatedAt": "2023-04-04T15:42:05.299+00:00",
                        "approvalStatus": null,
                        "enabled": false,
                        "ownerId": null,
                        "farmerAttributes": {
                            "id": 10,
                            "licenseType": "USDA Producer",
                            "licenseIssueDate": "2020-01-11T00:00:00.000+00:00",
                            "licenseStatus": "ACTIVE",
                            "licenseNumber": "USDA_15_0002",
                            "descriptionOfFarm": null,
                            "hempVariety": null,
                            "bales": null,
                            "hempType": null,
                            "certificationBy": null,
                            "ownTrucking": false,
                            "balesAvailable": 0,
                            "weightPerBale": 0,
                            "previousCrop": null,
                            "seedingRate": 0,
                            "rowSpaceInches": 0,
                            "pesticidesUsed": null,
                            "weatherInGeneral": null,
                            "fertilizerUsed": null,
                            "estimatedWeeds": null,
                            "totalAcreForGrowingIHemp": null,
                            "totalAcreCurrentlyUnderContract": null,
                            "region": null
                        },
                        "manufacturesAttributes": {
                            "id": 1603,
                            "targetTypeOfOutput": null,
                            "descriptionOfManufacturer": null,
                            "deliverySchedule": null,
                            "supportedIndustries": [],
                            "regions": []
                        },
                        "processorAttributes": {
                            "id": 1604,
                            "totalCapacityPerDayInTons": null,
                            "numberOfShiftsBeingUsed": 0,
                            "annualTonsUnderContract": 0,
                            "totalAnnualTonsAvailableToMarket": 0,
                            "regions": [],
                            "baleTypePreferred": null,
                            "targetTypeOfOutput": null,
                            "siteUtilization": null,
                            "descriptionOfProcessing": null,
                            "supportedIndustries": []
                        },
                        "specRequests": [],
                        "addresses": [
                            {
                                "id": 10,
                                "addressOne": "348 kipuni st",
                                "addressTwo": null,
                                "city": "hilo",
                                "state": "HI",
                                "zipcode": "96720",
                                "country": "United States",
                                "primaryAddress": null
                            }
                        ]
                    },
                    "addresses": [
                        {
                            "id": 1602,
                            "addressOne": "348 kipuni st",
                            "addressTwo": "",
                            "city": "hilo",
                            "state": "HI",
                            "zipcode": "96720",
                            "country": "United States",
                            "primaryAddress": true
                        }
                    ]
                }
            ],
            "pageable": {
                "sort": {
                    "empty": true,
                    "sorted": false,
                    "unsorted": true
                },
                "offset": 0,
                "pageNumber": 0,
                "pageSize": 100,
                "paged": true,
                "unpaged": false
            },
            "totalElements": 2,
            "totalPages": 1,
            "last": true,
            "size": 100,
            "number": 0,
            "sort": {
                "empty": true,
                "sorted": false,
                "unsorted": true
            },
            "numberOfElements": 2,
            "first": true,
            "empty": false
        }
    }
    fetchCategories() {
        return {"content":[{"id":1,"name":"Fiber","subCategories":[{"id":1506,"name":"Medium grade hurd chips"}]},{"id":2,"name":"Hurd/Fiber Mixed","subCategories":[{"id":1507,"name":""}]},{"id":3,"name":"Hurd","subCategories":[{"id":1508,"name":"Standard grade hurd chips"}]},{"id":4,"name":"Sliver","subCategories":[{"id":1515,"name":"Hemp Sliver - Dark"}]}],"pageable":{"sort":{"unsorted":true,"sorted":false,"empty":true},"pageNumber":0,"pageSize":200,"offset":0,"paged":true,"unpaged":false},"totalElements":4,"totalPages":1,"last":true,"first":true,"numberOfElements":4,"sort":{"unsorted":true,"sorted":false,"empty":true},"size":200,"number":0,"empty":false}
    }
    newGPTUser () {
       return {"result": "success", "created": "USR-JGQSE5RPFZAFLFRG"}
    }
}