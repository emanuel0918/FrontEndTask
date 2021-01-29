const advancedFilter = Vue.createApp({
    data() {
        return {
            // array with the tabs
            tabs : [
                { id : 11, label : 'OVERVIEW'},
                { id : 12, label : 'SECTOR'},
                { id : 13, label : 'CLIMATE IMPACT'},
                { id : 14, label : 'FINANCIALS'},
                { id : 15, label : 'WILDCARD'},
            ],
            // boolean for the displaying filter
            sectorSelected : true,
            // label
            search_label: 'INDUSTRIES & TAGS',
            // array which contains the industries and tags
            tags : [
                // aded an id for the key to store the preferences
                { id : 201, label : '3d printing' },
                { id : 202, label : 'advanced materials' },
                { id : 203, label : 'advanced metering' },
                { id : 204, label : 'air vehicles' },
                { id : 205, label : 'air-to-water' },
                { id : 206, label : 'algae' },
                { id : 207, label : 'packaging' },
                { id : 208, label : 'alternative proteins' },
                { id : 209, label : 'animal farming' },
                { id : 210, label : 'animal wlfare' },
                { id : 211, label : 'apiculture' },
                { id : 212, label : 'apps' },
                { id : 213, label : 'aquaculture' },
                { id : 214, label : 'artificial intelligence (AI)' },
                { id : 215, label : 'automotive' },
                { id : 216, label : 'autonomous vehicles' },
                { id : 217, label : 'aviation' },
                { id : 218, label : 'banking'}
            ],
            // label
            checkbox_label: 'INDUSTRIES',
            // array containing the industries checkboxes
            industries : [
                // an id for each element
                { id : 301, label : 'agriculture' },
                { id : 302, label : 'building' },
                { id : 303, label : 'constructions' },
                { id : 304, label : 'energy' },
                { id : 305, label : 'financial services' },
                { id : 306, label : 'food & beverage' },
                { id : 307, label : 'forestry' },
                { id : 308, label : 'healthcare' },
                { id : 309, label : 'logistics' },
                { id : 310, label : 'manufacturing' },
                { id : 311, label : 'mining' },
                { id : 312, label : 'other activities' },
                { id : 313, label : 'public administration' },
                { id : 314, label : 'telecommunications & ICT' },
                { id : 315, label : 'transportation' },
                { id : 316, label : 'utilities (electricity, water, waste)' }
                
            ]

        }
    }
})
