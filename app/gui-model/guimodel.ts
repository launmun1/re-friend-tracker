export class GuiModel {

    private _guiModel = {
        "application": {
            "title": "Munias Friend Tracker",
            "formList": [
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
			{			"id": "group",			"type": "autocomplete",			"name": "Group",			"data": [ "Study", "Family", "School" ], 
			"form": "GroupForm",			"width": 2			},
			{			"id": "nickname", 
			"type": "text", 
			"name": "Nickname", 
			"width": 2, 
			"required": true			},
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "data": [ "Winterthur", "Zürich" ],
                            "form": "GroupForm",
                            "width": 2
                        },
                        {
                            "id": "evtBirth",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
		{		"id": "GroupForm", 
		"title": "Group", 	
		"formFieldList": [			{			"id": "name",			"type": "text",			"name": "GroupName", 
			"width": 2,			"required": true			}, 
 {
                            "id": "creationDate",
                            "type": "date",
                            "name": "CreationDate",
                            "width": 2
                        },						
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
			{			"name": "Delete" 
			},			{			"type": "cancelButton", 
			"name": "Cancel",
			}, 
			{			"name": "Ok" 
			}		] 
},
                {
					"id": "ActivityForm",
					"title": "Activity",
					"formFieldList": [ 
						{ 
							"id": "name",
							"type": "text",
							"name": 'ActivityName',
							"width": 2,
							"required": true 
						},
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "data": [ "Winterthur", "Zürich" ],
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "creationDate",
                            "type": "date",
                            "name": "CreationDate",
                            "width": 2
                        },						
						{
							"type": "deleteButton",
							"name": "Delete"
						},
						{
							"type": "cancelButton",
							"name": "Cancel" 
						},
						{
							"type": "okButton",
							"name": "Ok" 
						}
					]
				},					
				{
					"id": "ActivitiesForm",
					"title": "Activity",
					"formFieldList": [ 
						{
							"id": "activities",
							"type": "autocomplete",
							"name": "Activity",
							"data": ["Something", "Movie Why Him", "Eating Pizza", "Running Eschenberg"],
							"form": "ActivityForm",
							"width": 2 
						},						
						{
							"type": "deleteButton",
							"name": "Delete"
						},
						{
							"type": "cancelButton",
							"name": "Cancel" 
						},
						{
							"type": "okButton",
							"name": "Ok" 
						}
					]
				}				
				
            ],            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "pink",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-location-arrow",
                            "color": "magenta",
                            "page": "locationspage",
                        },

			{			"type": "button", 
			"name": "Groups", 
			"icon": "fa-group", 
			"color": "wisteria", 
			"page": "groupspage",			},
{ 
							"type": "button",
							"name": "Activities",
							"icon": "fa-calendar",
							"color": "amethyst",
							"page": "activitiespage", 
						}	
                    ]
                },

			{
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Anton Amacker" }, { name: "Britta Beavers"} ],
                            "page": "friendpage",
                        }
                    ]
                },
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "green",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Adelboden" }, { name: "Winterthur" }, { name: "Zinal"}, { name: "Zürich"} ],
                            "form": {
                                "form": "LocationForm"
                            }
                        }
                    ]
                },
				{
					"id": "groupspage",
					"elementList": [ 
						{ 
							"type": "backbutton", 
						},
						{ 
							"type": "newButton",
							"name": "NewGroup",
							"icon": "fa-weixin",
							"color": "green",
							"form": { 
								"form": "GroupForm" 
							}
						},
						{
							"type": "list",
							"icon": "fa-weixin",
							"color": "wisteria",
							"search": true,
							"data": [ { name: "Study" }, { name: "Family" }, { name: "School"} ],
							"form": {
								"form": "GroupForm"
							}
						},
					]
				},
				{
					"id": "friendpage",
					"elementList": [ 
						{ 
							"type": "backbutton", 
						},
						{ 
							"type": "newButton",
							"name": "EditFriend",
							"icon": "fa-user",
							"color": "green",
							"form": { 
								"form": "FriendForm" 
							}
						},
						{ 
							"type": "newButton",
							"name": "AddActivity",
							"icon": "fa-calendar",
							"color": "green",
							"form": { 
								"form": "ActivitiesForm" 
							}
						},						
						{
							"type": "list",
							"icon": "fa-calendar",
							"color": "amethyst",
							"search": true,
							"data": [ { name: "Movie Why Him" }, { name: "Eating Pizza" }, { name: "Running Eschenberg"} ],
							"form": {
								"form": "ActivitiesForm"
							}
						}
					]
				},
				{
					"id": "activitiespage",
					"elementList": [ 
						{ 
							"type": "backbutton", 
						},
						{ 
							"type": "newButton",
							"name": "New Activity",
							"icon": "fa-calendar",
							"color": "green",
							"form": { 
								"form": "ActivityForm" 
							}
						},
						{
							"type": "list",
							"icon": "fa-calendar",
							"color": "pumpkin",
							"search": true,
							"data": [ { name: "Something" }, { name: "Movie Why Him" }, { name: "Eating Pizza" }, { name: "Running Eschenberg"} ],
							"page": "activitypage"
						},
					]
				},					
				{
					"id": "activitypage",
					"elementList": [ 
						{ 
							"type": "backbutton", 
						},
						{ 
							"type": "newButton",
							"name": "EditActivity",
							"icon": "fa-calendar",
							"color": "green",
							"form": { 
								"form": "ActivityForm" 
							}
						},
						{
							"type": "list",
							"icon": "fa-user",
							"color": "blue",
							"search": true,
							"data": [ { name: "Anton Amacker" }, { name: "Britta Beavers"} ],
							"form": {
								"form": "FriendForm"
							}
						}
					]
				}				
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
