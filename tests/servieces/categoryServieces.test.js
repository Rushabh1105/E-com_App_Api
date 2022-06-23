const category = require('../../models/index').Categories;
const categoryServiece = require('../../servieces/category.Serviece');

test('get categories' , async() => {
    const response = [{name : 'electronics'},{name:'food'}];

    const spy = jest.spyOn(category,'findAll').mockImplementation(() => {
        return response;
    });

    await categoryServiece.getAllCategories();
    expect(spy).toHaveBeenCalled();
})

test('create categories' , async() => {
    const data = {name : 'electronics'}
    const response = [{name : 'electronics'},{name:'food'}];

    const spy = jest.spyOn(category,'create').mockImplementation(() => {
        return response;
    });

    await categoryServiece.createCategory(data);
    expect(spy).toHaveBeenCalled();
})