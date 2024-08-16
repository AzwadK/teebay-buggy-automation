import { LoginPage } from "../page-objects/login_page";
import { BrowseProduct } from "../page-objects/browseproduct_page";


const loginpage = new LoginPage;

beforeEach(() => {
    loginpage.login('testuser@teebay.com', '123456');
  });

const browseproducts = new BrowseProduct;

describe('View Count tests' , () =>{

    it('View Count changes in Browse Products' , () =>{

        browseproducts.selecttab();
        browseproducts.getproduct2viewcount();
        

    });

});


    