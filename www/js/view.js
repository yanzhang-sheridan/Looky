var app = function(app) {

    app.View = class {
        constructor(m) {
            zogy("hi from View");
            const v = this;

            v.manager = new Manager();

            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            // PAGE 1

            const page1 = v.page1 = new Container();
            page1.header = asset("heading.png").clone().addTo(page1);
            page1.content = new Container(500,500).addTo(page1);

            // page1.circle = new Circle(50, m.getColor(id), dark)
            //     .cur("crosshair")
            //     .center(page1.content);



                // STYLE = {
                //     type:{
                //         CheckBox:{
                //             size:30
                //         }
                //     }
                // }

              page1.list = new List({
                    color:darker,
                    backgroundColor:yellow,
                    rollBackgroundColor:green,
                    selectedBackgroundColor:orange,
                    selectedRollBackgroundColor:orange,
                    list:["Breakfast", "Lunch", "Dinner", "Desert", "Snack", "Midnight Snack"],
                    checkBox:true
                })
                  .cur("crosshair")
                  .sca(1.5)
                  .center(page1.content)
                  .change(summary);
                //
                function summary() {
                    var output = "Checked Items: ";
                    var checked = [];
                    loop(page1.list.checkBoxes, function (checkBox) {
                        if (checkBox.checked) checked.push(checkBox.text);
                    });
                    output += checked.join(", ");
                    page1.message.text = output;
                    stage.update();
                };

                  // page1.list.objID = id;

                // hi Ami!
                // list.on("scrolling", function () {
                //     zog("scrolling");
                // });
                // id = "message";

                page1.message = new Label({
                    text:"Checked Items:",
                    size:20,
                    lineWidth:page1.list.width,
                    lineHeight:25
                })
                    .alp(.8).loc(page1.list.x, page1.list.y+page1.list.height+50);

                page1.list.setChecks(true);
                page1.list.setCheck(2, false);
                summary();
                zog(page1.list.getCheck(2));


                // STYLE = {
                //     type:{
                //         CheckBox:{
                //             size:24
                //         },
                //         List:{
                //             backgroundColor:blue,
                //         }
                //     }
                // }

                // an example of inserting a checkItem into a custom list
                // note: not using the checkBox parameter but rather the checkItem() static method
                // new List({list:["goodbye", List.checkItem("hello"), "what?"]}).center()


            // make our own custom id for data!

            // page1.circle = new Circle(50, null, dark)
            //     .cur("crosshair")
            //     .center(page1.content);
            // page1.circle.objID = "circle"; // make our own custom id for data!
            // page1.circle.color = m.getColor(page1.circle.objID);

            page1.footer = new Label("SHERIDAN IM").addTo(page1);

            v.manager.add(
                new Layout(page1, [
                    {object:page1.header},
                    {object:page1.content},
                    {object:page1.footer, maxWidth:80}
                ], 5, brown, true, null, stage)
                // ], 5, brown, true, new Shape(), stage)
            );


            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            // PAGE 2

            const page2 = v.page2 = new Container();

            page2.header = asset("heading.png").clone().addTo(page2);

            page2.content = new Container(500,500).addTo(page2);

            // id = "rectangle";
            page2.rect = new Rectangle(100, 100, green, dark)
                .center(page2.content);
            // page2.rect.objID = id;
            // make our own custom id for data!


            page2.footer = new Label("SHERIDAN IM").addTo(page2);

            v.manager.add(
                new Layout(page2, [
                    {object:page2.header},
                    {object:page2.content},
                    {object:page2.footer, maxWidth:80}
                ], 5, brown, true, null, stage)
                // ], 5, brown, true, new Shape(), stage)
            );



            const pages = new Pages([
                {page:page1, swipe:[page2,page2,null,null]},
                {page:page2, swipe:[page1,page1,null,null]}
            ], "slide").addTo();


            v.manager.add(pages);


        }
    }

    return app;
}(app||{});
