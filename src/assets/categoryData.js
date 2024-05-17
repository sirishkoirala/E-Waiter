const datas = [
   {
      "menu": {
         "veg": {
            "image": "images/veg_category.jpg",
            "items": [
               {
                  "id": "veg1",
                  "name": "Mixed Vegetable Curry",
                  "price": "NPR 200",
                  "image": "images/mixed_vegetable_curry.jpg"
               },
               {
                  "id": "veg2",
                  "name": "Paneer Butter Masala",
                  "price": "NPR 250",
                  "image": "images/paneer_butter_masala.jpg"
               },
               { "id": "veg3", "name": "Chana Masala", "price": "NPR 180", "image": "images/chana_masala.jpg" },
               { "id": "veg4", "name": "Aloo Gobi", "price": "NPR 170", "image": "images/aloo_gobi.jpg" },
               {
                  "id": "veg5",
                  "name": "Vegetable Biryani",
                  "price": "NPR 220",
                  "image": "images/vegetable_biryani.jpg"
               },
               { "id": "veg6", "name": "Palak Paneer", "price": "NPR 240", "image": "images/palak_paneer.jpg" },
               { "id": "veg7", "name": "Dal Tadka", "price": "NPR 160", "image": "images/dal_tadka.jpg" },
               { "id": "veg8", "name": "Bhindi Masala", "price": "NPR 200", "image": "images/bhindi_masala.jpg" },
               { "id": "veg9", "name": "Vegetable Pulao", "price": "NPR 210", "image": "images/vegetable_pulao.jpg" },
               { "id": "veg10", "name": "Matar Paneer", "price": "NPR 230", "image": "images/matar_paneer.jpg" },
               { "id": "veg11", "name": "Gajar Halwa", "price": "NPR 150", "image": "images/gajar_halwa.jpg", "rating": 4.8 },
               { "id": "veg12", "name": "Baingan Bharta", "price": "NPR 200", "image": "images/baingan_bharta.jpg", "rating": 4.3 },
               { "id": "veg13", "name": "Rajma", "price": "NPR 190", "image": "images/rajma.jpg", "rating": 4.5 },
               { "id": "veg14", "name": "Shahi Paneer", "price": "NPR 250", "image": "images/shahi_paneer.jpg", "rating": 4.6 },
               { "id": "veg15", "name": "Aloo Matar", "price": "NPR 180", "image": "images/aloo_matar.jpg", "rating": 4.2 },
               { "id": "veg16", "name": "Methi Malai Matar", "price": "NPR 240", "image": "images/methi_malai_matar.jpg", "rating": 4.4 },
               { "id": "veg17", "name": "Navratan Korma", "price": "NPR 260", "image": "images/navratan_korma.jpg", "rating": 4.7 },
               { "id": "veg18", "name": "Paneer Tikka Masala", "price": "NPR 270", "image": "images/paneer_tikka_masala.jpg", "rating": 4.6 },
               { "id": "veg19", "name": "Vegetable Kofta", "price": "NPR 250", "image": "images/vegetable_kofta.jpg", "rating": 4.3 },
               { "id": "veg20", "name": "Stuffed Capsicum", "price": "NPR 230", "image": "images/stuffed_capsicum.jpg", "rating": 4.5 }


            ]
         },
         "nonveg": {
            "image": "images/nonveg_category.jpg",
            "items": [
               { "id": "nonveg1", "name": "Chicken Curry", "price": "NPR 300", "image": "images/chicken_curry.jpg" },
               { "id": "nonveg2", "name": "Mutton Biryani", "price": "NPR 350", "image": "images/mutton_biryani.jpg" },
               { "id": "nonveg3", "name": "Butter Chicken", "price": "NPR 320", "image": "images/butter_chicken.jpg" },
               { "id": "nonveg4", "name": "Fish Fry", "price": "NPR 280", "image": "images/fish_fry.jpg" },
               { "id": "nonveg5", "name": "Prawn Masala", "price": "NPR 400", "image": "images/prawn_masala.jpg" },
               { "id": "nonveg6", "name": "Egg Curry", "price": "NPR 220", "image": "images/egg_curry.jpg" },
               {
                  "id": "nonveg7",
                  "name": "Chicken Tikka Masala",
                  "price": "NPR 330",
                  "image": "images/chicken_tikka_masala.jpg"
               },
               {
                  "id": "nonveg8",
                  "name": "Mutton Rogan Josh",
                  "price": "NPR 380",
                  "image": "images/mutton_rogan_josh.jpg"
               },
               { "id": "nonveg9", "name": "Fish Curry", "price": "NPR 290", "image": "images/fish_curry.jpg" },
               {
                  "id": "nonveg10",
                  "name": "Chicken Biryani",
                  "price": "NPR 310",
                  "image": "images/chicken_biryani.jpg"
               }
               , { "id": "nonveg11", "name": "Lamb Korma", "price": "NPR 360", "image": "images/lamb_korma.jpg", "rating": 4.7 },
               { "id": "nonveg12", "name": "Goan Fish Curry", "price": "NPR 320", "image": "images/goan_fish_curry.jpg", "rating": 4.6 },
               { "id": "nonveg13", "name": "Prawn Biryani", "price": "NPR 420", "image": "images/prawn_biryani.jpg", "rating": 4.8 },
               { "id": "nonveg14", "name": "Chicken Korma", "price": "NPR 330", "image": "images/chicken_korma.jpg", "rating": 4.7 },
               { "id": "nonveg15", "name": "Egg Biryani", "price": "NPR 250", "image": "images/egg_biryani.jpg", "rating": 4.4 },
               { "id": "nonveg16", "name": "Beef Steak", "price": "NPR 450", "image": "images/beef_steak.jpg", "rating": 4.9 },
               { "id": "nonveg17", "name": "Chicken Pakora", "price": "NPR 280", "image": "images/chicken_pakora.jpg", "rating": 4.5 },
               { "id": "nonveg18", "name": "Mutton Kebab", "price": "NPR 350", "image": "images/mutton_kebab.jpg", "rating": 4.7 },
               { "id": "nonveg19", "name": "Chicken Shawarma", "price": "NPR 300", "image": "images/chicken_shawarma.jpg", "rating": 4.6 },
               { "id": "nonveg20", "name": "Fish Tikka", "price": "NPR 310", "image": "images/fish_tikka.jpg", "rating": 4.5 }
            ]
         },
         "snaks": {
            "image": "images/snaks_category.jpg",
            "items": [
               { "id": "snaks1", "name": "Samosa", "price": "NPR 50", "image": "images/samosa.jpg" },
               { "id": "snaks2", "name": "Pakora", "price": "NPR 60", "image": "images/pakora.jpg" },
               { "id": "snaks3", "name": "Spring Rolls", "price": "NPR 80", "image": "images/spring_rolls.jpg" },
               { "id": "snaks4", "name": "Nachos", "price": "NPR 150", "image": "images/nachos.jpg" },
               { "id": "snaks5", "name": "French Fries", "price": "NPR 100", "image": "images/french_fries.jpg" },
               { "id": "snaks6", "name": "Onion Rings", "price": "NPR 120", "image": "images/onion_rings.jpg" },
               {
                  "id": "snaks7",
                  "name": "Mozzarella Sticks",
                  "price": "NPR 140",
                  "image": "images/mozzarella_sticks.jpg"
               },
               { "id": "snaks8", "name": "Chicken Wings", "price": "NPR 200", "image": "images/chicken_wings.jpg" },
               { "id": "snaks9", "name": "Garlic Bread", "price": "NPR 80", "image": "images/garlic_bread.jpg" },
               {
                  "id": "snaks10",
                  "name": "Stuffed Mushrooms",
                  "price": "NPR 180",
                  "image": "images/stuffed_mushrooms.jpg"
               }
               , { "id": "snaks11", "name": "Bhel Puri", "price": "NPR 60", "image": "images/bhel_puri.jpg", "rating": 4.5 },
               { "id": "snaks12", "name": "Sev Puri", "price": "NPR 70", "image": "images/sev_puri.jpg", "rating": 4.4 },
               { "id": "snaks13", "name": "Pani Puri", "price": "NPR 50", "image": "images/pani_puri.jpg", "rating": 4.6 },
               { "id": "snaks14", "name": "Chole Bhature", "price": "NPR 130", "image": "images/chole_bhature.jpg", "rating": 4.7 },
               { "id": "snaks15", "name": "Paneer Tikka", "price": "NPR 150", "image": "images/paneer_tikka.jpg", "rating": 4.6 },
               { "id": "snaks16", "name": "Pav Bhaji", "price": "NPR 140", "image": "images/pav_bhaji.jpg", "rating": 4.8 },
               { "id": "snaks17", "name": "Aloo Tikki", "price": "NPR 60", "image": "images/aloo_tikki.jpg", "rating": 4.3 },
               { "id": "snaks18", "name": "Masala Dosa", "price": "NPR 120", "image": "images/masala_dosa.jpg", "rating": 4.5 },
               { "id": "snaks19", "name": "Vada Pav", "price": "NPR 50", "image": "images/vada_pav.jpg", "rating": 4.4 },
               { "id": "snaks20", "name": "Spring Roll", "price": "NPR 90", "image": "images/spring_roll.jpg", "rating": 4.6 }
            ]
         },
         "drinks": {
            "image": "images/drinks_category.jpg",
            "items": [
               { "id": "drinks1", "name": "Lassi", "price": "NPR 50", "image": "images/lassi.jpg", "rating": 4.6 },
               { "id": "drinks2", "name": "Masala Chai", "price": "NPR 30", "image": "images/masala_chai.jpg", "rating": 4.7 },
               { "id": "drinks3", "name": "Cold Coffee", "price": "NPR 80", "image": "images/cold_coffee.jpg", "rating": 4.5 },
               { "id": "drinks4", "name": "Mango Shake", "price": "NPR 60", "image": "images/mango_shake.jpg", "rating": 4.8 },
               { "id": "drinks5", "name": "Buttermilk", "price": "NPR 40", "image": "images/buttermilk.jpg", "rating": 4.6 },
               { "id": "drinks6", "name": "Lemonade", "price": "NPR 30", "image": "images/lemonade.jpg", "rating": 4.5 },
               { "id": "drinks7", "name": "Orange Juice", "price": "NPR 50", "image": "images/orange_juice.jpg", "rating": 4.7 },
               { "id": "drinks8", "name": "Watermelon Juice", "price": "NPR 60", "image": "images/watermelon_juice.jpg", "rating": 4.6 },
               { "id": "drinks9", "name": "Apple Juice", "price": "NPR 70", "image": "images/apple_juice.jpg", "rating": 4.8 },
               { "id": "drinks10", "name": "Pineapple Juice", "price": "NPR 80", "image": "images/pineapple_juice.jpg", "rating": 4.5 },
               { "id": "drinks11", "name": "Strawberry Shake", "price": "NPR 90", "image": "images/strawberry_shake.jpg", "rating": 4.6 },
               { "id": "drinks12", "name": "Banana Shake", "price": "NPR 70", "image": "images/banana_shake.jpg", "rating": 4.7 },
               { "id": "drinks13", "name": "Iced Tea", "price": "NPR 50", "image": "images/iced_tea.jpg", "rating": 4.5 },
               { "id": "drinks14", "name": "Hot Chocolate", "price": "NPR 100", "image": "images/hot_chocolate.jpg", "rating": 4.8 },
               { "id": "drinks15", "name": "Espresso", "price": "NPR 70", "image": "images/espresso.jpg", "rating": 4.7 },
               { "id": "drinks16", "name": "Latte", "price": "NPR 90", "image": "images/latte.jpg", "rating": 4.6 },
               { "id": "drinks17", "name": "Cappuccino", "price": "NPR 100", "image": "images/cappuccino.jpg", "rating": 4.8 },
               { "id": "drinks18", "name": "Mocha", "price": "NPR 110", "image": "images/mocha.jpg", "rating": 4.7 },
               { "id": "drinks19", "name": "Black Coffee", "price": "NPR 60", "image": "images/black_coffee.jpg", "rating": 4.5 },
               { "id": "drinks20", "name": "Green Tea", "price": "NPR 50", "image": "images/green_tea.jpg", "rating": 4.6 }
            ]
         },
         "tea": {
            "image": "images/tea_category.jpg",
            "items": [
               { "id": "tea1", "name": "Masala Chai", "price": "NPR 40", "image": "images/masala_chai.jpg" },
               { "id": "tea2", "name": "Green Tea", "price": "NPR 60", "image": "images/green_tea.jpg" },
               { "id": "tea3", "name": "Black Tea", "price": "NPR 50", "image": "images/black_tea.jpg" },
               { "id": "tea4", "name": "Lemon Tea", "price": "NPR 50", "image": "images/lemon_tea.jpg" },
               { "id": "tea5", "name": "Ginger Tea", "price": "NPR 50", "image": "images/ginger_tea.jpg" },
               { "id": "tea6", "name": "Earl Grey", "price": "NPR 70", "image": "images/earl_grey.jpg" },
               { "id": "tea7", "name": "Chamomile Tea", "price": "NPR 80", "image": "images/chamomile_tea.jpg" },
               { "id": "tea8", "name": "Peppermint Tea", "price": "NPR 70", "image": "images/peppermint_tea.jpg" },
               { "id": "tea9", "name": "Jasmine Tea", "price": "NPR 70", "image": "images/jasmine_tea.jpg" },
               { "id": "tea10", "name": "Oolong Tea", "price": "NPR 80", "image": "images/oolong_tea.jpg" }
            ]
         },
         "coffee": {
            "image": "images/coffee_category.jpg",
            "items": [
               { "id": "coffee1", "name": "Espresso", "price": "NPR 100", "image": "images/espresso.jpg", "rating": 4.6 },
               { "id": "coffee2", "name": "Cappuccino", "price": "NPR 120", "image": "images/cappuccino.jpg", "rating": 4.7 },
               { "id": "coffee3", "name": "Latte", "price": "NPR 130", "image": "images/latte.jpg", "rating": 4.8 },
               { "id": "coffee4", "name": "Mocha", "price": "NPR 140", "image": "images/mocha.jpg", "rating": 4.7 },
               { "id": "coffee5", "name": "Americano", "price": "NPR 110", "image": "images/americano.jpg", "rating": 4.6 },
               { "id": "coffee6", "name": "Macchiato", "price": "NPR 130", "image": "images/macchiato.jpg", "rating": 4.5 },
               { "id": "coffee7", "name": "Affogato", "price": "NPR 150", "image": "images/affogato.jpg", "rating": 4.8 },
               { "id": "coffee8", "name": "Flat White", "price": "NPR 140", "image": "images/flat_white.jpg", "rating": 4.6 },
               { "id": "coffee9", "name": "Irish Coffee", "price": "NPR 160", "image": "images/irish_coffee.jpg", "rating": 4.9 },
               { "id": "coffee10", "name": "Turkish Coffee", "price": "NPR 130", "image": "images/turkish_coffee.jpg", "rating": 4.7 },
               { "id": "coffee11", "name": "Vienna Coffee", "price": "NPR 150", "image": "images/vienna_coffee.jpg", "rating": 4.8 },
               { "id": "coffee12", "name": "Ristretto", "price": "NPR 120", "image": "images/ristretto.jpg", "rating": 4.6 },
               { "id": "coffee13", "name": "Frappe", "price": "NPR 140", "image": "images/frappe.jpg", "rating": 4.7 },
               { "id": "coffee14", "name": "Vietnamese Iced Coffee", "price": "NPR 160", "image": "images/vietnamese_iced_coffee.jpg", "rating": 4.8 },
               { "id": "coffee15", "name": "Spanish Latte", "price": "NPR 130", "image": "images/spanish_latte.jpg", "rating": 4.7 },
               { "id": "coffee16", "name": "Bulletproof Coffee", "price": "NPR 170", "image": "images/bulletproof_coffee.jpg", "rating": 4.9 },
               { "id": "coffee17", "name": "Chai Latte", "price": "NPR 140", "image": "images/chai_latte.jpg", "rating": 4.7 },
               { "id": "coffee18", "name": "Turmeric Latte", "price": "NPR 160", "image": "images/turmeric_latte.jpg", "rating": 4.8 },
               { "id": "coffee19", "name": "White Chocolate Mocha", "price": "NPR 150", "image": "images/white_chocolate_mocha.jpg", "rating": 4.7 },
               { "id": "coffee20", "name": "Irish Cream Coffee", "price": "NPR 180", "image": "images/irish_cream_coffee.jpg", "rating": 4.9 }
            ]
         },
         "pizza": {
            "image": "images/pizza_category.jpg",
            "items": [
               { "id": "pizza1", "name": "Margherita", "price": "NPR 300", "image": "images/margherita.jpg", "rating": 4.6 },
               { "id": "pizza2", "name": "Pepperoni", "price": "NPR 350", "image": "images/pepperoni.jpg", "rating": 4.7 },
               { "id": "pizza3", "name": "BBQ Chicken", "price": "NPR 380", "image": "images/bbq_chicken.jpg", "rating": 4.8 },
               { "id": "pizza4", "name": "Veggie Supreme", "price": "NPR 320", "image": "images/veggie_supreme.jpg", "rating": 4.5 },
               { "id": "pizza5", "name": "Hawaiian", "price": "NPR 340", "image": "images/hawaiian.jpg", "rating": 4.6 },
               { "id": "pizza6", "name": "Meat Lovers", "price": "NPR 400", "image": "images/meat_lovers.jpg", "rating": 4.8 },
               { "id": "pizza7", "name": "Four Cheese", "price": "NPR 370", "image": "images/four_cheese.jpg", "rating": 4.7 },
               { "id": "pizza8", "name": "Buffalo Chicken", "price": "NPR 380", "image": "images/buffalo_chicken.jpg", "rating": 4.6 },
               { "id": "pizza9", "name": "Spinach and Feta", "price": "NPR 350", "image": "images/spinach_feta.jpg", "rating": 4.7 },
               { "id": "pizza10", "name": "Mushroom", "price": "NPR 330", "image": "images/mushroom.jpg", "rating": 4.5 },
               { "id": "pizza11", "name": "Tandoori Chicken", "price": "NPR 360", "image": "images/tandoori_chicken.jpg", "rating": 4.8 },
               { "id": "pizza12", "name": "Paneer Tikka", "price": "NPR 340", "image": "images/paneer_tikka.jpg", "rating": 4.6 },
               { "id": "pizza13", "name": "Sausage", "price": "NPR 350", "image": "images/sausage.jpg", "rating": 4.7 },
               { "id": "pizza14", "name": "Prosciutto", "price": "NPR 380", "image": "images/prosciutto.jpg", "rating": 4.8 },
               { "id": "pizza15", "name": "Pesto Chicken", "price": "NPR 360", "image": "images/pesto_chicken.jpg", "rating": 4.7 },
               { "id": "pizza16", "name": "Bacon and Egg", "price": "NPR 370", "image": "images/bacon_egg.jpg", "rating": 4.8 },
               { "id": "pizza17", "name": "Garlic Prawn", "price": "NPR 390", "image": "images/garlic_prawn.jpg", "rating": 4.7 },
               { "id": "pizza18", "name": "Salami", "price": "NPR 350", "image": "images/salami.jpg", "rating": 4.6 },
               { "id": "pizza19", "name": "Mexican", "price": "NPR 360", "image": "images/mexican.jpg", "rating": 4.5 },
               { "id": "pizza20", "name": "Seafood", "price": "NPR 400", "image": "images/seafood.jpg", "rating": 4.8 }
            ]
         },
         "nepali": {
            "image": "images/local_home_made_food.jpg",
            "items": [
               { "id": "local1", "name": "Dal Bhat", "price": "NPR 150", "image": "https://images.unsplash.com/photo-1588644525273-f37b60d78512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MDcxNjB8MHwxfHNlYXJjaHwxfHxkYWFsYmhhdHxlbnwwfHx8fDE3MTU5MDg1ODh8MA&ixlib=rb-4.0.3&q=80&w=1080/dal_bhat.jpg", "rating": 4.9 },
               { "id": "local2", "name": "Momo", "price": "NPR 120", "image": "images/momo.jpg", "rating": 4.8 },
               { "id": "local3", "name": "Sel Roti", "price": "NPR 50", "image": "images/sel_roti.jpg", "rating": 4.7 },
               { "id": "local4", "name": "Gundruk", "price": "NPR 100", "image": "images/gundruk.jpg", "rating": 4.6 },
               { "id": "local5", "name": "Thukpa", "price": "NPR 140", "image": "images/thukpa.jpg", "rating": 4.7 },
               { "id": "local6", "name": "Aloo Tama", "price": "NPR 130", "image": "images/aloo_tama.jpg", "rating": 4.6 },
               { "id": "local7", "name": "Yomari", "price": "NPR 60", "image": "images/yomari.jpg", "rating": 4.8 },
               { "id": "local8", "name": "Chatamari", "price": "NPR 120", "image": "images/chatamari.jpg", "rating": 4.7 },
               { "id": "local9", "name": "Kwati", "price": "NPR 150", "image": "images/kwati.jpg", "rating": 4.6 },
               { "id": "local10", "name": "Bara", "price": "NPR 70", "image": "images/bara.jpg", "rating": 4.7 },
               { "id": "local11", "name": "Sandheko", "price": "NPR 80", "image": "images/sandheko.jpg", "rating": 4.6 },
               { "id": "local12", "name": "Khir", "price": "NPR 100", "image": "images/khir.jpg", "rating": 4.8 },
               { "id": "local13", "name": "Thakali Khana", "price": "NPR 160", "image": "images/thakali_khana.jpg", "rating": 4.9 },
               { "id": "local14", "name": "JuJu Dhau", "price": "NPR 90", "image": "images/juju_dhau.jpg", "rating": 4.8 },
               { "id": "local15", "name": "Samay Baji", "price": "NPR 140", "image": "images/samay_baji.jpg", "rating": 4.7 },
               { "id": "local16", "name": "Chhoila", "price": "NPR 130", "image": "images/chhoila.jpg", "rating": 4.6 },
               { "id": "local17", "name": "Aloo Achaar", "price": "NPR 50", "image": "images/aloo_achaar.jpg", "rating": 4.5 },
               { "id": "local18", "name": "Buff Sukuti", "price": "NPR 150", "image": "images/buff_sukuti.jpg", "rating": 4.7 },
               { "id": "local19", "name": "Tama Bodi", "price": "NPR 100", "image": "images/tama_bodi.jpg", "rating": 4.6 },
               { "id": "local20", "name": "Nepali Tea", "price": "NPR 30", "image": "images/nepali_tea.jpg", "rating": 4.8 }
            ]
         },
         "burger": {
            "image": "images/burger_category.jpg",
            "items": [
               { "id": "burger1", "name": "Cheeseburger", "price": "NPR 200", "image": "images/cheeseburger.jpg" },
               { "id": "burger2", "name": "Veggie Burger", "price": "NPR 180", "image": "images/veggie_burger.jpg" },
               { "id": "burger3", "name": "Chicken Burger", "price": "NPR 220", "image": "images/chicken_burger.jpg" },
               { "id": "burger4", "name": "Bacon Burger", "price": "NPR 250", "image": "images/bacon_burger.jpg" },
               {
                  "id": "burger5",
                  "name": "Mushroom Swiss Burger",
                  "price": "NPR 240",
                  "image": "images/mushroom_swiss_burger.jpg"
               },
               { "id": "burger6", "name": "BBQ Burger", "price": "NPR 230", "image": "images/bbq_burger.jpg" },
               { "id": "burger7", "name": "Turkey Burger", "price": "NPR 210", "image": "images/turkey_burger.jpg" },
               {
                  "id": "burger8",
                  "name": "Black Bean Burger",
                  "price": "NPR 190",
                  "image": "images/black_bean_burger.jpg"
               },
               {
                  "id": "burger9",
                  "name": "Double Cheeseburger",
                  "price": "NPR 270",
                  "image": "images/double_cheeseburger.jpg"
               },
               { "id": "burger10", "name": "Fish Burger", "price": "NPR 220", "image": "images/fish_burger.jpg" },
               { "id": "burger11", "name": "Black Bean Burger", "price": "NPR 190", "image": "images/black_bean_burger.jpg", "rating": 4.3 },
               { "id": "burger12", "name": "Lamb Burger", "price": "NPR 270", "image": "images/lamb_burger.jpg", "rating": 4.8 },
               { "id": "burger13", "name": "Falafel Burger", "price": "NPR 210", "image": "images/falafel_burger.jpg", "rating": 4.6 },
               { "id": "burger14", "name": "Teriyaki Burger", "price": "NPR 250", "image": "images/teriyaki_burger.jpg", "rating": 4.7 },
               { "id": "burger15", "name": "Buffalo Chicken Burger", "price": "NPR 230", "image": "images/buffalo_chicken_burger.jpg", "rating": 4.5 },
               { "id": "burger16", "name": "Portobello Burger", "price": "NPR 220", "image": "images/portobello_burger.jpg", "rating": 4.6 },
               { "id": "burger17", "name": "Avocado Burger", "price": "NPR 240", "image": "images/avocado_burger.jpg", "rating": 4.7 },
               { "id": "burger18", "name": "Hawaiian Burger", "price": "NPR 260", "image": "images/hawaiian_burger.jpg", "rating": 4.8 },
               { "id": "burger19", "name": "Blue Cheese Burger", "price": "NPR 250", "image": "images/blue_cheese_burger.jpg", "rating": 4.7 },
               { "id": "burger20", "name": "Chipotle Burger", "price": "NPR 240", "image": "images/chipotle_burger.jpg", "rating": 4.6 }

            ]
         },
         "vegan": {
            "image": "images/vegan_category.jpg",
            "items": [
               { "id": "vegan1", "name": "Vegan Burrito", "price": "NPR 180", "image": "images/vegan_burrito.jpg" },
               { "id": "vegan2", "name": "Vegan Tacos", "price": "NPR 170", "image": "images/vegan_tacos.jpg" },
               {
                  "id": "vegan3",
                  "name": "Vegan Buddha Bowl",
                  "price": "NPR 200",
                  "image": "images/vegan_buddha_bowl.jpg"
               },
               { "id": "vegan4", "name": "Vegan Salad", "price": "NPR 150", "image": "images/vegan_salad.jpg" },
               { "id": "vegan5", "name": "Vegan Pasta", "price": "NPR 220", "image": "images/vegan_pasta.jpg" },
               { "id": "vegan6", "name": "Vegan Stir Fry", "price": "NPR 210", "image": "images/vegan_stir_fry.jpg" },
               { "id": "vegan7", "name": "Vegan Sushi", "price": "NPR 230", "image": "images/vegan_sushi.jpg" },
               { "id": "vegan8", "name": "Vegan Pizza", "price": "NPR 300", "image": "images/vegan_pizza.jpg" },
               { "id": "vegan9", "name": "Vegan Curry", "price": "NPR 250", "image": "images/vegan_curry.jpg" },
               { "id": "vegan10", "name": "Vegan Burger", "price": "NPR 200", "image": "images/vegan_burger.jpg" }
            ]
         },
         "sweets": {
            "image": "images/sweets_category.jpg",
            "items": [
               { "id": "sweets1", "name": "Gulab Jamun", "price": "NPR 100", "image": "images/gulab_jamun.jpg", "rating": 4.8 },
               { "id": "sweets2", "name": "Jalebi", "price": "NPR 80", "image": "images/jalebi.jpg", "rating": 4.7 },
               { "id": "sweets3", "name": "Rasgulla", "price": "NPR 120", "image": "images/rasgulla.jpg", "rating": 4.6 },
               { "id": "sweets4", "name": "Kaju Katli", "price": "NPR 150", "image": "images/kaju_katli.jpg", "rating": 4.9 },
               { "id": "sweets5", "name": "Ladoo", "price": "NPR 90", "image": "images/ladoo.jpg", "rating": 4.5 },
               { "id": "sweets6", "name": "Barfi", "price": "NPR 110", "image": "images/barfi.jpg", "rating": 4.7 },
               { "id": "sweets7", "name": "Peda", "price": "NPR 100", "image": "images/peda.jpg", "rating": 4.6 },
               { "id": "sweets8", "name": "Rabri", "price": "NPR 130", "image": "images/rabri.jpg", "rating": 4.8 },
               { "id": "sweets9", "name": "Malpua", "price": "NPR 140", "image": "images/malpua.jpg", "rating": 4.9 },
               { "id": "sweets10", "name": "Kheer", "price": "NPR 110", "image": "images/kheer.jpg", "rating": 4.5 },
               // Additional items
               { "id": "sweets11", "name": "Mysore Pak", "price": "NPR 150", "image": "images/mysore_pak.jpg", "rating": 4.7 },
               { "id": "sweets12", "name": "Cham Cham", "price": "NPR 130", "image": "images/cham_cham.jpg", "rating": 4.6 },
               { "id": "sweets13", "name": "Soan Papdi", "price": "NPR 100", "image": "images/soan_papdi.jpg", "rating": 4.5 },
               { "id": "sweets14", "name": "Basundi", "price": "NPR 140", "image": "images/basundi.jpg", "rating": 4.8 },
               { "id": "sweets15", "name": "Rasmalai", "price": "NPR 150", "image": "images/rasmalai.jpg", "rating": 4.9 },
               { "id": "sweets16", "name": "Kalakand", "price": "NPR 120", "image": "images/kalakand.jpg", "rating": 4.7 },
               { "id": "sweets17", "name": "Motichoor Ladoo", "price": "NPR 140", "image": "images/motichoor_ladoo.jpg", "rating": 4.6 },
               { "id": "sweets18", "name": "Coconut Barfi", "price": "NPR 110", "image": "images/coconut_barfi.jpg", "rating": 4.5 },
               { "id": "sweets19", "name": "Dry Fruit Halwa", "price": "NPR 160", "image": "images/dry_fruit_halwa.jpg", "rating": 4.8 },
               { "id": "sweets20", "name": "Sandesh", "price": "NPR 130", "image": "images/sandesh.jpg", "rating": 4.7 }
            ]
         },
         "cakes": {
            "image": "images/cakes_category.jpg",
            "items": [
               { "id": "cake1", "name": "Chocolate Cake", "price": "NPR 250", "image": "images/chocolate_cake.jpg", "rating": 4.8 },
               { "id": "cake2", "name": "Vanilla Cake", "price": "NPR 230", "image": "images/vanilla_cake.jpg", "rating": 4.6 },
               { "id": "cake3", "name": "Red Velvet Cake", "price": "NPR 280", "image": "images/red_velvet_cake.jpg", "rating": 4.7 },
               { "id": "cake4", "name": "Black Forest Cake", "price": "NPR 270", "image": "images/black_forest_cake.jpg", "rating": 4.9 },
               { "id": "cake5", "name": "Cheesecake", "price": "NPR 300", "image": "images/cheesecake.jpg", "rating": 4.8 },
               { "id": "cake6", "name": "Fruit Cake", "price": "NPR 240", "image": "images/fruit_cake.jpg", "rating": 4.6 },
               { "id": "cake7", "name": "Pineapple Cake", "price": "NPR 260", "image": "images/pineapple_cake.jpg", "rating": 4.7 },
               { "id": "cake8", "name": "Carrot Cake", "price": "NPR 250", "image": "images/carrot_cake.jpg", "rating": 4.6 },
               { "id": "cake9", "name": "Coffee Cake", "price": "NPR 270", "image": "images/coffee_cake.jpg", "rating": 4.8 },
               { "id": "cake10", "name": "Lemon Cake", "price": "NPR 230", "image": "images/lemon_cake.jpg", "rating": 4.5 },
               { "id": "cake11", "name": "Tiramisu", "price": "NPR 290", "image": "images/tiramisu.jpg", "rating": 4.9 },
               { "id": "cake12", "name": "Opera Cake", "price": "NPR 300", "image": "images/opera_cake.jpg", "rating": 4.7 },
               { "id": "cake13", "name": "Chocolate Lava Cake", "price": "NPR 310", "image": "images/chocolate_lava_cake.jpg", "rating": 4.8 },
               { "id": "cake14", "name": "Rainbow Cake", "price": "NPR 280", "image": "images/rainbow_cake.jpg", "rating": 4.6 },
               { "id": "cake15", "name": "Butter Cake", "price": "NPR 240", "image": "images/butter_cake.jpg", "rating": 4.5 },
               { "id": "cake16", "name": "Banana Cake", "price": "NPR 230", "image": "images/banana_cake.jpg", "rating": 4.6 },
               { "id": "cake17", "name": "Mango Cake", "price": "NPR 260", "image": "images/mango_cake.jpg", "rating": 4.7 },
               { "id": "cake18", "name": "Nut Cake", "price": "NPR 270", "image": "images/nut_cake.jpg", "rating": 4.8 },
               { "id": "cake19", "name": "Chiffon Cake", "price": "NPR 250", "image": "images/chiffon_cake.jpg", "rating": 4.6 },
               { "id": "cake20", "name": "Pumpkin Cake", "price": "NPR 280", "image": "images/pumpkin_cake.jpg", "rating": 4.7 }
            ]
         },
         "icecreams": {
            "image": "images/icecreams_category.jpg",
            "items": [
               { "id": "icecream1", "name": "Vanilla Ice Cream", "price": "NPR 120", "image": "images/vanilla_ice_cream.jpg", "rating": 4.7 },
               { "id": "icecream2", "name": "Chocolate Ice Cream", "price": "NPR 130", "image": "images/chocolate_ice_cream.jpg", "rating": 4.8 },
               { "id": "icecream3", "name": "Strawberry Ice Cream", "price": "NPR 120", "image": "images/strawberry_ice_cream.jpg", "rating": 4.6 },
               { "id": "icecream4", "name": "Mango Ice Cream", "price": "NPR 140", "image": "images/mango_ice_cream.jpg", "rating": 4.7 },
               { "id": "icecream5", "name": "Butterscotch Ice Cream", "price": "NPR 150", "image": "images/butterscotch_ice_cream.jpg", "rating": 4.8 },
               { "id": "icecream6", "name": "Pistachio Ice Cream", "price": "NPR 160", "image": "images/pistachio_ice_cream.jpg", "rating": 4.9 },
               { "id": "icecream7", "name": "Cookies and Cream Ice Cream", "price": "NPR 140", "image": "images/cookies_cream_ice_cream.jpg", "rating": 4.7 },
               { "id": "icecream8", "name": "Mint Chocolate Chip Ice Cream", "price": "NPR 150", "image": "images/mint_chocolate_chip_ice_cream.jpg", "rating": 4.8 },
               { "id": "icecream9", "name": "Coffee Ice Cream", "price": "NPR 130", "image": "images/coffee_ice_cream.jpg", "rating": 4.6 },
               { "id": "icecream10", "name": "Banana Ice Cream", "price": "NPR 140", "image": "images/banana_ice_cream.jpg", "rating": 4.7 },
               { "id": "icecream11", "name": "Blackberry Ice Cream", "price": "NPR 160", "image": "images/blackberry_ice_cream.jpg", "rating": 4.9 },
               { "id": "icecream12", "name": "Lemon Sorbet", "price": "NPR 120", "image": "images/lemon_sorbet.jpg", "rating": 4.8 },
               { "id": "icecream13", "name": "Salted Caramel Ice Cream", "price": "NPR 150", "image": "images/salted_caramel_ice_cream.jpg", "rating": 4.8 },
               { "id": "icecream14", "name": "Raspberry Ripple Ice Cream", "price": "NPR 130", "image": "images/raspberry_ripple_ice_cream.jpg", "rating": 4.7 },
               { "id": "icecream15", "name": "Blueberry Ice Cream", "price": "NPR 160", "image": "images/blueberry_ice_cream.jpg", "rating": 4.9 },
               { "id": "icecream16", "name": "Chocolate Fudge Ice Cream", "price": "NPR 150", "image": "images/chocolate_fudge_ice_cream.jpg", "rating": 4.8 },
               { "id": "icecream17", "name": "Matcha Ice Cream", "price": "NPR 170", "image": "images/matcha_ice_cream.jpg", "rating": 4.8 },
               { "id": "icecream18", "name": "Peach Ice Cream", "price": "NPR 140", "image": "images/peach_ice_cream.jpg", "rating": 4.7 },
               { "id": "icecream19", "name": "Rocky Road Ice Cream", "price": "NPR 160", "image": "images/rocky_road_ice_cream.jpg", "rating": 4.8 },
               { "id": "icecream20", "name": "Tutti Frutti Ice Cream", "price": "NPR 140", "image": "images/tutti_frutti_ice_cream.jpg", "rating": 4.7 }
            ]
         }
      }
   }
]

export default datas