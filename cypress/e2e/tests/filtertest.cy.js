import { LoginPage } from "../page-objects/login_page";
import { BrowseProduct } from "../page-objects/browseproduct_page";

const loginpage = new LoginPage

beforeEach(() => {
    loginpage.login('testuser@teebay.com', '123456');
  });

describe('filter tests' , () =>{

    const browseproducts = new BrowseProduct();

    it('filter by title' , () =>{

        browseproducts.selecttab();
        browseproducts.filtertitle("Blender");
        browseproducts.pressfilter();
        browseproducts.pressclear();
        

    });

    it('filter by category' , () =>{

        browseproducts.selecttab();
        browseproducts.filtercategory("Furniture");
        browseproducts.pressfilter();
        browseproducts.pressclear();

        

    });

    it('filter by Purchase price' , () =>{

        browseproducts.selecttab();
        browseproducts.filterbuyprice("100", "2000");
        browseproducts.pressfilter();
        browseproducts.pressclear();

        

    });

    it('filter by Rent Price' , () =>{

        browseproducts.selecttab();
        browseproducts.filterrentprice("500", "1000");
        browseproducts.pressfilter();
        browseproducts.pressclear();

        

    });

    it('filter by category' , () =>{

        browseproducts.selecttab();
        browseproducts.filtercategory("Furniture");
        browseproducts.pressfilter();
        browseproducts.pressclear();

        

    });

});
     
