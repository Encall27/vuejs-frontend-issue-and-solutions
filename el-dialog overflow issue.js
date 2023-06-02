# Purpose 
// Use el-dialog to make the popup form for steps form (create new project)

# Issue Description

// The content part of each steps maybe too much, it will overflow and cause the popup reach the top and bottom of the window size. 
// And I would like to make a scroll bar for the content part only.


/* Structure :
Header 
Content 
Footer 
*/

# Solution
// I use "overflow-y: hidden; overflow-x: hidden;" for no overflow and it will not be affected by the large data of content. 
// I have to set a max-height to "body_content" part, in order to make it as a fixed container and with a scroll bar if data is too much.
// I make "body_header" and "body_footer" for the case that you need to freeze the title or description part.

# CSS Part (form id : 'myform')
.myform .el-dialog__body .body_header {
	overflow-y: hidden; overflow-x: hidden;
}
.myform .el-dialog__body .body_content {
	max-height: calc(70vh - 250px) !important;
	overflow-y: auto; overflow-x: hidden;
}
.myform .el-dialog__body .body_footer {
	overflow-y: hidden; overflow-x: hidden;
}
