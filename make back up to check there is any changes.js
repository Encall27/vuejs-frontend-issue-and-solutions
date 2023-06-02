# Purpose
```
I would like to make a back up on data and monitor it, if there is any changes, the "update" button will not be disabled. 
But when the user remove his changes like the original data (without any changes), the "update" button should be disabled instead of active. 
```
# Issue Description
```
The old method is use watch to watch every changeable items, the code is too long to read.
```
# Solution (in Vue3)
```
I can first define a reactive name state. Reactive is powerful, every item inside it is deep watch. 
I can watch the whole object "state.changableItems", every items inside make changes will trigger the watch function.
```

const state = reactive({
	dialog: {
		isShowDialog: false,
		type: '',
		title: '',
		submitTxt: '',
	},
	changableItems: {
        project_name: '',
        selectedFunctionalItems: {'items': <any[]>([]), 'needTest': <any[]>([])},
        selectedPerformanceItems: {'items': <any[]>([]), 'needTest': <any[]>([])},
        selectedSecurityItems: {'items': <any[]>([]), 'needTest': <any[]>([])},
        server_info: {}
    },
	originalChangableItems: null,
})

// watch changable 
watch( (state.changableItems), (newValue, oldValue) => {
    // Check if the new value is different from the original value
    const isModified = JSON.stringify(newValue) !== JSON.stringify(state.originalChangableItems);
    state.isChangableItemsModified = isModified;
},{ immediate: true })

// Disable the update button if there are no changes
const isUpdateButtonDisabled = computed(() => !state.isChangableItemsModified);
