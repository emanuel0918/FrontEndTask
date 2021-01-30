const advancedFilter = Vue.createApp({
    data() {
        return {
            // color for the unselected tab
            colorUnselected : '#c3fac1',
            // color for the selected tab
            colorSelected : '#84da81',
            // array with the tabs
            tabs : [
                { id : 11, label : 'OVERVIEW'},
                { id : 12, label : 'SECTOR'},
                { id : 13, label : 'CLIMATE IMPACT'},
                { id : 14, label : 'FINANCIALS'},
                { id : 15, label : 'WILDCARD'},
            ],
            // key for the tab currently selected
            //tabSelected : 0,
            tabSelected : 12,
            // boolean for the displaying filter
            sectorSelected : true,
            //sectorSelected : false,
            // activate to be false
            // label
            search_label: 'INDUSTRIES & TAGS',
            // array which contains the industries and tags
            tags : [
                // aded an id for the key to store the preferences
                { id : 201, label : '3d printing' },
                { id : 202, label : 'Advanced materials' },
                { id : 203, label : 'Advanced metering' },
                { id : 204, label : 'Air vehicles' },
                { id : 205, label : 'Air-to-water' },
                { id : 206, label : 'Algae' },
                { id : 207, label : 'Packaging' },
                { id : 208, label : 'Alternative proteins' },
                { id : 209, label : 'Animal farming' },
                { id : 210, label : 'Animal wlfare' },
                { id : 211, label : 'Apiculture' },
                { id : 212, label : 'Apps' },
                { id : 213, label : 'Aquaculture' },
                { id : 214, label : 'Artificial intelligence (AI)' },
                { id : 215, label : 'Automotive' },
                { id : 216, label : 'Autonomous vehicles' },
                { id : 217, label : 'Aviation' },
                { id : 218, label : 'Banking'}
            ],
            // label
            checkbox_label: 'INDUSTRIES',
            // array containing the industries checkboxes
            industries : [
                // an id for each element
                { id : 301, label : 'Agriculture' },
                { id : 302, label : 'Building' },
                { id : 303, label : 'Constructions' },
                { id : 304, label : 'Energy' },
                { id : 305, label : 'Financial services' },
                { id : 306, label : 'Food & beverage' },
                { id : 307, label : 'Forestry' },
                { id : 308, label : 'Healthcare' },
                { id : 309, label : 'Logistics' },
                { id : 310, label : 'Manufacturing' },
                { id : 311, label : 'Mining' },
                { id : 312, label : 'Other activities' },
                { id : 313, label : 'Public administration' },
                { id : 314, label : 'Telecommunications & ICT' },
                { id : 315, label : 'Transportation' },
                { id : 316, label : 'Utilities (electricity, water, waste)' }
                
            ]

        }
    },
    methods: {
        tabSelect (tabId) {
            this.tabSelected = tabId
            switch (tabId) {
                case 12:
                    this.sectorSelected = true
                    break
                default:
                    this.sectorSelected = false
                    break
            }
            
        },
        checkboxSelect (filterId) {
        }
    }

})
