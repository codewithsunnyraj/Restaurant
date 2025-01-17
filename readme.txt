Validator is used for Validate email,password and soon...


app.use(express.json()), used for when we send request from frontend to backend that will be passed using json (it is a middleware)

/**/

const foodModel = mongoose.model.food || mongoose.model("food", foodSchema);
It means if food model is already present in database then it will not create food model in db if it not present then it will create



/*
foodRouter.post("/add", upload.single("image"), addFood);
/add is a route
upload.single("image) , this is a middleware upload.single means you can upload only one image at a time
addFood, is a controller
*/


/*

 <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
              className="w-32"
            />
            
URL.createObjectURL(image),it is used for ?

*/



/*


const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  why this how it work


*/