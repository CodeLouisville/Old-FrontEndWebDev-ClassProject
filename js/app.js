
var menuData = 'https://cdn.rawgit.com/Bumbolio/567f8ed0ac99703fbbe24a64638fcc81/raw/9a0930b07e6b746a76e058ac956e5528aedcfacf/menu.json';

$.ajax(menuData).done(function(data) {

    //Find exisiting food container
    var foodContainer = $('#foodcontainer');

    //Create an empty array to hold a pair of menu tables.  
    var menuRow = [];

    data.Food.forEach(function(foodSection, index){      
        var table = buildTable(foodSection);
        menuRow.push(table);

        //We draw a row of tables after each set of two tables, or if it's the last table.  
        if(!(index % 2 === 0) || index == (data.Food.length - 1)) {
            var sectionGroup = $('<div class="section group">');
            sectionGroup.append(menuRow);
        
            //Add my section group div to my food container div.
            foodContainer.append(sectionGroup);
            
            //Clear my pair of menus since they have been appended to a section group.  
            menuRow = [];
        }     
    });
 
});


//May provide this part.
function buildTable(section) {
   var table = $('<table class="menu">');
   table.append('<thead><tr><th colspan="2"><h4 class="menu-head red">' + section.name + '</h4></th></tr></thead>');

   for (var i = 0; i < section.items.length; i++) {
       var item = section.items[i];
       var row = $('<tr>');
       row.append('<td>' + item.name + '</td>');
       row.append('<td class="menu-price text-right">$' + item.price.toFixed(2) + '</td>');
       table.append(row);
   }
   var wrapper = $('<div class="col span_1_of_2">');

   wrapper.append(table);

   return wrapper;
}