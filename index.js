
let loading = document.querySelector('.site-loading');

let upper_container = document.querySelector('.upper-container');
let adobe_stocks_container = document.querySelector('.adobe-container-slider');
let lower_container = document.querySelector('.lower-container');

let filter_btn = document.querySelector('.filter-btn');
let aside = document.querySelector('aside');
let main_section = document.querySelector('.main-section');

let sort_btn = document.querySelector('.sort-btn');
let sort_btn_ul = document.querySelector('.sort-btn ul');
let sort_btn_button_fa = document.querySelector('.sort-btn-fa');
let sort_btn_button = document.querySelector('.sort-btn button');

let categorys_container = document.querySelector('.categorys-container');
let aside_icon = document.querySelector('aside .filter-box .icon');

let filter_search_sort_container = document.querySelector('.filter_search_sort_container');
let filter_search_sort_container_filter_btn = document.querySelector('.filter_search_sort_container .filter-btn');

let footer = document.querySelector('footer');

let categorys_container_left = document.querySelector('.categorys-container .fa-angle-left');
let categorys_container_right = document.querySelector('.categorys-container .fa-angle-right');
let categorys_container_ul = document.querySelector('.categorys-container ul');
let categorys_container_ul_li = document.querySelectorAll('.categorys-container ul li');
let categorys_container_ul_li_one = document.querySelector('.categorys-container ul .all');


let adobe_container_slider = document.querySelector('.adobe-container-slider-container .adobe-container-slider');
let adobe_container_slider_container_right = document.querySelector('.adobe-container-slider-container .arrow-btn .fa-angle-right');
let adobe_container_slider_container_left = document.querySelector('.adobe-container-slider-container .arrow-btn .fa-angle-left');


let menu_btn = document.querySelector('.menu');
let menu_close_btn = document.querySelector('.navigation-mobile .menu');
let navigation_mobile = document.querySelector('.navigation-mobile');


let creative_btn = document.querySelector('.creative-header');
let creative_ul = document.querySelector('.creative-field-box ul');
let creative_ul_arrow = document.querySelector('.creative-field-box .creative-header .fa-angle-down');

let availability_btn = document.querySelector('.availability-header');
let availability_ul = document.querySelector('.availability-box ul');
let availability_ul_arrow = document.querySelector('.availability-box .availability-header .fa-angle-down');

let location_btn = document.querySelector('.location-header');
let location_ul = document.querySelector('.location-box ul');
let location_ul_arrow = document.querySelector('.location-box .location-header .fa-angle-down');

let tools_btn = document.querySelector('.tools-header');
let tools_ul = document.querySelector('.tools-box ul');
let tools_ul_arrow = document.querySelector('.tools-box .tools-header .fa-angle-down');

// sort btn tabs
let recommended = document.querySelector('.sort-btn ul .recommended');
let most_appreciated = document.querySelector('.sort-btn ul .most-appreciated');
let most_view = document.querySelector('.sort-btn ul .most-view');
let most_recent = document.querySelector('.sort-btn ul .most-recent');

let creative_field_box_ul_li = document.querySelectorAll('.creative-field-box ul li');
let creative_field_box_ul_li_all = document.querySelector('.creative-field-box ul li.all');

let availability_box_ul_li_input = document.querySelector('.availability-box ul li #All');
let availability_box_ul_li_input_fullTime = document.querySelector('.availability-box ul li #Full-Time');
let availability_box_ul_li_input_Freelance_Project = document.querySelector('.availability-box ul li #Freelance_Project');

let location_box_select = document.querySelector('.location-box ul li select');

let tool_input = document.querySelector('.tools-box ul li #tool-input');
let tool_input_tools = document.querySelectorAll('.tools-box ul li');



window.addEventListener("load", () => {
    loading.style.display = "none";
})


creative_btn.addEventListener("click", () => {
    creative_ul.classList.toggle('open');
    creative_ul_arrow.classList.toggle('rotate');
})

availability_btn.addEventListener("click", () => {
    availability_ul.classList.toggle('open');
    availability_ul_arrow.classList.toggle('rotate');
})

location_btn.addEventListener("click", () => {
    location_ul.classList.toggle('open');
    location_ul_arrow.classList.toggle('rotate');
})

tools_btn.addEventListener("click", () => {
    tools_ul.classList.toggle('open');
    tools_ul_arrow.classList.toggle('rotate');
})


menu_btn.addEventListener("click", () => {
    menu_btn.classList.toggle('menu-toggle');
    navigation_mobile.classList.toggle('toggle-navigation-mobile');
})

menu_close_btn.addEventListener("click", () => {
    menu_btn.classList.toggle('menu-toggle');
    navigation_mobile.classList.toggle('toggle-navigation-mobile');
})



// window scroll
window.addEventListener("scroll", () => {

    let window_height = window.innerHeight;

    if (window_height >= footer.getBoundingClientRect().top) {

        filter_search_sort_container.style.zIndex = "2";

    } else {

        filter_search_sort_container.style.zIndex = "4";

    }
})


categorys_container_ul.addEventListener("scroll", () => {

    if (categorys_container_ul.scrollLeft <= 10) {
        categorys_container_left.style.opacity = "0";
    } else {
        categorys_container_left.style.opacity = "1";
    }

    if (categorys_container_ul.scrollLeft >= 800) {
        categorys_container_right.style.opacity = "0";
    } else {
        categorys_container_right.style.opacity = "1";
    }

})


categorys_container_left.addEventListener("click", () => {
    categorys_container_ul.scrollLeft -= 200;
})

categorys_container_right.addEventListener("click", () => {
    categorys_container_ul.scrollLeft += 200;
})


adobe_container_slider_container_left.addEventListener("click", () => {
    adobe_container_slider.scrollLeft -= 200;
})

adobe_container_slider_container_right.addEventListener("click", () => {
    adobe_container_slider.scrollLeft += 200;
})


// filter btn show 
let responsiveCheck = window.matchMedia("(min-width: 901px)");


window.addEventListener("resize", () => {
    if (!responsiveCheck.matches) {
        aside.classList.remove('aside-toggle');
        main_section.classList.remove('main-section-toggle');
        upper_container.classList.remove('upper-container-toggle');
        lower_container.classList.remove('lower-container-toggle');
        categorys_container.classList.remove('categorys-container-toggle');
        filter_search_sort_container.classList.remove('filter_search_sort_container-toggle');
        filter_search_sort_container_filter_btn.classList.remove('filter-btn-toggle');
        document.querySelector('.filter-box .filter-header .icon').innerHTML = "&#10006;";
    } else {
        document.querySelector('.filter-box .filter-header .icon').innerHTML = "&#8676;";
    }
})


// filter button
filter_btn.addEventListener("click", () => {

    if (responsiveCheck.matches) {

        main_section.classList.toggle('main-section-toggle');
        aside.classList.toggle('aside-toggle');
        upper_container.classList.toggle('upper-container-toggle');
        lower_container.classList.toggle('lower-container-toggle');
        categorys_container.classList.toggle('categorys-container-toggle');
        filter_search_sort_container.classList.toggle('filter_search_sort_container-toggle');
        filter_search_sort_container_filter_btn.classList.toggle('filter-btn-toggle');

    } else {
        aside.classList.add('aside-toggle-responsive');
        document.querySelector('.filter-box .filter-header .icon').innerHTML = "&#10006;";
    }
})


let boolean = true;
sort_btn.addEventListener('click', () => {
    sort_btn_ul.classList.toggle('sort-ul-toggle');

    if (boolean) {
        sort_btn_button_fa.style.rotate = "180deg";
        sort_btn_button.style.outline = ".05em solid var(--blue)";
        boolean = false;
    } else {
        sort_btn_button_fa.style.rotate = "0deg";
        sort_btn_button.style.outline = ".05em solid #D5D5D5";
        boolean = true;
    }

})


aside_icon.addEventListener("click", () => {

    if (responsiveCheck.matches) {

        main_section.classList.toggle('main-section-toggle');
        aside.classList.toggle('aside-toggle');
        upper_container.classList.toggle('upper-container-toggle');
        lower_container.classList.toggle('lower-container-toggle');
        categorys_container.classList.toggle('categorys-container-toggle');
        filter_search_sort_container.classList.toggle('filter_search_sort_container-toggle');
        filter_search_sort_container_filter_btn.classList.toggle('filter-btn-toggle');

    } else {
        aside.classList.remove('aside-toggle-responsive');
        document.querySelector('.filter-box .filter-header .icon').innerHTML = "&#8676;";
    }
})



// json product data
fetch('product.json').then(response => response.json()).then((data) => {

    categorys_container_ul_li.forEach(val => {
        val.addEventListener("click", () => {

            let category_filter = data.products.filter((value) => {
                return value.details.category.toLocaleLowerCase().includes(val.innerText.toLowerCase());
            });

            show(category_filter);
        })
    });

    categorys_container_ul_li_one.addEventListener("click", () => {
        show(data.products);
    })

    recommended.addEventListener("click", () => {
        sort_btn_button.innerText = "Recommended";
        let category_filter = data.products.filter((value) => {
            return Math.max(value.details.like);
        });

        show(category_filter);
    })

    most_appreciated.addEventListener("click", () => {
        sort_btn_button.innerText = "Most Appreciated";
        let category_filter = data.products.filter((value) => {
            return value.appreciations;
        });

        show(category_filter);
    })

    most_view.addEventListener("click", () => {
        sort_btn_button.innerText = "Most Viewed";
        let category_filter = data.products.filter((value) => {
            return Math.max(value.details.views) > 500;
        });

        show(category_filter);
    })

    most_recent.addEventListener("click", () => {
        sort_btn_button.innerText = "Most Recent";
        let category_filter = data.products.filter((value) => {
            return Math.max(value.id);
        });

        show(category_filter);
    })


    creative_field_box_ul_li.forEach(val => {
        val.addEventListener("click", () => {

            let category_filter = data.products.filter((value) => {
                return value.details.category.toLocaleLowerCase().includes(val.innerText.toLowerCase());
            });

            show(category_filter);
        })
    });

    creative_field_box_ul_li_all.addEventListener("click", () => {
        show(data.products);
    })


    availability_box_ul_li_input.addEventListener("click", () => {
        show(data.products);
    })

    availability_box_ul_li_input_fullTime.addEventListener("click", () => {

        let category_filter = data.products.filter((value) => {
            return value.full_time.toLocaleLowerCase().includes("yes");
        });

        show(category_filter);
    })

    availability_box_ul_li_input_Freelance_Project.addEventListener("click", () => {

        let category_filter = data.products.filter((value) => {
            return value.freelance.toLocaleLowerCase().includes("yes");
        });

        show(category_filter);
    })


    location_box_select.addEventListener("change", () => {

        let category_filter = data.products.filter((value) => {
            return value.location.toLocaleLowerCase().includes(location_box_select.value);
        });

        show(category_filter);
    })


    tool_input_tools.forEach(val => {
        val.addEventListener("click", () => {

            let category_filter = data.products.filter((value) => {
                return value.details.category.toLocaleLowerCase().includes(val.innerText.toLowerCase());
            });

            show(category_filter);
        })
    });


    // search 
    let search_categories = [...new Set(data.products.map((item) => { return item }))];

    tool_input.addEventListener("keyup", (e) => {
        let searchData = e.target.value.toLowerCase();

        let filterData = search_categories.filter((item) => {
            return (
                item.details.category.toLocaleLowerCase().includes(searchData) || item.details.title.toLocaleLowerCase().includes(searchData)
            )
        })
        show(filterData);
    })

    document.querySelector('.search-bar-products').addEventListener("keyup", (e) => {
        let searchData = e.target.value.toLowerCase();

        let filterData = search_categories.filter((item) => {
            return (
                item.details.category.toLocaleLowerCase().includes(searchData) || item.details.title.toLocaleLowerCase().includes(searchData) || item.full_name.toLocaleLowerCase().includes(searchData) || item.location.toLocaleLowerCase().includes(searchData)
            )
        })
        show(filterData);
    })


    function show(product_data) {

        let upper_con = " ";
        let lower_con = " ";

        product_data.sort(() => Math.random() - 0.5); // random data

        product_data.slice(0, 6).forEach(values => {
            upper_con += `<div class="card"><div class="image"><span class="folder"><i class="fa fa-folder-open"></i> <p>save</p></span> <img src="${values.details.productImg}" alt="tempalte"></div> <div class="title-like-views-container"><p class="title">${values.details.title}</p> <span><p class="like"><i class="fa fa-thumbs-up"></i>&nbsp;${values.details.like} </p> <p class="view"><i class="fa fa-eye"></i>&nbsp;${values.details.views} </p></span></div> <p class="name">${values.full_name}</p> </div>`;
        });

        product_data.slice(6).forEach(values => {
            lower_con += `<div class="card"><div class="image"><span class="folder"><i class="fa fa-folder-open"></i> <p>save</p></span> <img src="${values.details.productImg}" alt="tempalte"></div> <div class="title-like-views-container"><p class="title">${values.details.title}</p> <span><p class="like"><i class="fa fa-thumbs-up"></i>&nbsp;${values.details.like} </p> <p class="view"><i class="fa fa-eye"></i>&nbsp;${values.details.views} </p></span></div> <p class="name">${values.full_name}</p> </div>`;
        });

        upper_container.innerHTML = upper_con;

        lower_container.innerHTML = lower_con;


    }

    show(data.products);


}).catch((error) => {
    console.log(error);
});



// adobe stocks json data
fetch('adobe_stocks.json').then(response => response.json()).then((data) => {

    let adobe_stocks_con = " ";

    data.stock.forEach(values => {
        adobe_stocks_con += `<div class="adobe-container-slider-card"> <div class="adobe-container-slider-card-image"><img src="${values.image}" alt=""> <svg viewBox="-7 -7 38 38" xmlns="http://www.w3.org/2000/svg"><path d="M3,9A1,1,0,0,0,4,8V5A1,1,0,0,1,5,4H8A1,1,0,0,0,8,2H5A3,3,0,0,0,2,5V8A1,1,0,0,0,3,9ZM8,20H5a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H8a1,1,0,0,0,0-2ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14ZM19,2H16a1,1,0,0,0,0,2h3a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,19,2Zm2,13a1,1,0,0,0-1,1v3a1,1,0,0,1-1,1H16a1,1,0,0,0,0,2h3a3,3,0,0,0,3-3V16A1,1,0,0,0,21,15Z"/></svg> </div> <p class="title">${values.title}</p> <span><img src="${values.logo}" alt=""> <p>${values.full_name}</p></span> </div>`;
    });

    adobe_stocks_container.innerHTML = `${adobe_stocks_con}`;

}).catch((error) => {
    console.log(error);
});