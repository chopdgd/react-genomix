import{utils}from"../index";describe("Test dateFormatter",function(){it("should return date fromatted like 1987-12-18 by default",function(){expect(utils.dateFormatter("1987-12-18")).toEqual("12/18/1987")}),it("should return date fromatted with custom formating",function(){expect(utils.dateFormatter("Dececember 18, 1987","MMMMDYYYY")).toEqual("12/18/1987")})});