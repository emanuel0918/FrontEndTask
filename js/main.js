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
                { id : 210, label : 'Animal welfare' },
                { id : 211, label : 'Apiculture' },
                { id : 212, label : 'Apps' },
                { id : 213, label : 'Aquaculture' },
                { id : 214, label : 'Artificial intelligence (AI)' },
                { id : 215, label : 'Automotive' },
                { id : 216, label : 'Autonomous vehicles' },
                { id : 217, label : 'Aviation' },
                { id : 218, label : 'Banking'}
            ],
            // array for the industry checkboxes selected
            industriesSelected : [],
            industryIndexSelected : [],
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
                
            ],
            // text for the suggestions
            textTyped : '',
            // a tag matched
            tagFound : false,
            userSubmitted : false

        }
    },
    methods: {
        tabSelect (tabId) {
            // change the tab selected in the app
            this.tabSelected = tabId;
            // check which tab is the selected
            switch (tabId) {
                case 12:
                    // if is the Sector tab by default
                    this.sectorSelected = true;
                    // if the user clicked the button before
                    if (this.userSubmitted) {
                        // Reset the final output condition
                        this.userSubmitted = false;
                        // Reset the array of the checkboxes selected
                        this.industriesSelected = [];
                        // Reset the array with the indexes of the industries selected
                        this.industryIndexSelected = [];
                    }
                    break;
                default:
                    // if is not the Sector tab dont show it
                    this.sectorSelected = false;
                    break;
            }
            
        },
        matchFound(tag) {
            //console.log(this.textTyped);
            // Clear the search
            this.tagFound = true;
            // Set the texTyped to the match
            this.textTyped = tag;
        },
        checkboxSelect (filterId) {
            /*
                add a flag if the checkbox selected
                has been selected before
            */
            found = false;
            // iterate over all the filters
            size = this.industriesSelected.length;
            for ( i = 0; i < size; i ++) {
                if (this.industriesSelected[i] == filterId) {
                    // delete the filter for unmark the checkbox
                    delete this.industriesSelected[i];
                    // mark that has been found before
                    found = true;
                    break;
                }
            }
            // if has been found before just discard it
            if (!found) {
                // add in the array the checkbox by its id
                this.industriesSelected.push(filterId);
            }
            //console.log(this.industriesSelected);
        },
        btnApplySubmited () {
            // this.textTyped is the tag selected
            // this.industriesSelected is the array of the industries selected
            for (i = 0; i < this.industriesSelected.length; i++) {
                try {
                    // assign the index selected
                    n = this.industriesSelected[i];
                    // check if it is valid
                    if (n >= 301 && n <= 316) {
                        // add the index in the array
                        this.industryIndexSelected.push(n);
                    }
                } catch (error) {
                    
                }
            }
            // the tabSelected now is reset to 0
            this.tabSelected = 0;

            this.sectorSelected = false;

            this.userSubmitted = true;

            // Finally reset the form
            this.$refs.formAdvancedFilter.reset();
            //
            //console.log(this.industryIndexSelected);
        },
        btnClearSubmited () {
            // Clear the form with the ref formAdvancedFilter
            this.$refs.formAdvancedFilter.reset();
            this.tagFound = true;
        }
    }

})
