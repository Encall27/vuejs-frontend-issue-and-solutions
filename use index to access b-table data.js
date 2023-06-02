# Purpose
```
The b-table will display all the data, and I can select one of them (onclick it) to retrieve the row data
```

# Issue Description
```
The data doesn't change when sorting is occured, the row data is not the row I clicked(wanted). 
The sorting will influence the data index
```

# Solution
```
use on-row-click (built-in function in b-table) to pass the whole row data 
=> will not be influenced by row index 
=> directly work on the row data instead of finding the items data by index
```
