const categoryServiece = require('../../servieces/category.Serviece');
const categoryController = require('../../controllers/category.controller')
const { mockResponse,mockRequest } = require('../mockers');

test('category controller',async () => {
    const req = mockRequest();
    const res = mockResponse();
    const response = [{name : 'electronics'},{name:'food'}];

    const spy = jest.spyOn(categoryServiece,'getAllCategories').mockImplementation(() => {
        return response
    });

    await categoryController.getAllCategories(req,res);
    expect(spy).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({
        message : 'Successfully fetched the category',
        success : true,
        code : 200,
        data : response
    });
});

test('delete a category',async() =>{
    const req = mockRequest();
    const res = mockResponse();

    const spy = jest.spyOn(categoryServiece,'deleteCategory').mockImplementation(()=>{
        return true;
    });

    await categoryController.deleteCategory(req,res);
    expect(spy).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({
        message : 'Successfully Deleted the category',
        success : true,
        code : 200,
    });
})


test('create a category',async() =>{
    const req = mockRequest();
    const res = mockResponse();
    const response = [{name : 'electronics'},{name:'food'}];

    const spy = jest.spyOn(categoryServiece,'createCategory').mockImplementation(()=>{
        return response;
    });

    await categoryController.createCategory(req,res);
    expect(spy).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({
        message : 'Successfully Created the category',
        success : true,
        code : 201,
        data : response
    });
})