ALL ABOUT HOW WE STARTED THE PROJECT.
1 page.js is the file which will be displaying the project on localhost.3000
2 in next all the routes depends on files path, the main folder is the app folder.
3 in app api, all imp things are stored.
4 layout.js is the file which  wrap all in it.it is root file.
5 we wrapped page.js with nav and provider in layout.js for using the nav and provider in all pages

{ Navbar }
we are using useclient because of useState and useEffect 
imported Link, image, signIn, signOut, useSession, getProviders for use 
signIn signOut are inbuilt functions
we are building nav sepreatly for desktop and mobile
first we used temperory variable isUserLoggedin and set to true
after we checking if user is logged in then rener a div if not 
we are using useState for if user is not logged in .
we set to null, providers and setproviders
{
    signin
    using useEffect to get response 
we calling useEffect once by adding[] at end,
        using asyncronus function ,
saving getProviders in res using await by this the function will wait for completing the process.
after that we calling setproviders with res.
that will allow us to sign in using google and nextauth
        in else part we are checking if we have access or not by using providers.
    if we have access to providers we will go to object.value to access the providers and map on it
} 

same for { mobile navigation }
we need toggle mode for dropdown 
using usestate toggle and settoggledropdown
first it is false 
by using dropdown class of globalcss 
we saying turn it to false which previously made true using!
we created many buttons one is signout by using signOut it will directly signout
out navbar ends here

{ provider }
we are using sessProvider for suppling session information
The SessionProvider is a context provider that supplies session information to the rest of the application.
 The session prop is passed to the SessionProvider, which uses it to provide session information to the rest of the application.
  By wrapping { children } inside the SessionProvider, it ensures that all nested components can access the session context.
  we wrapped layout.js body in <provider> by this it will provide all the information

    {authentication process starts}
    we created a api folder in app
    api auth [...nextauth]this is dynamic way to make api
    we created route.js
    here we will make googleauthentication
    imported nextauth and googleauthentication
    for handling authentication we created handler
    all the main keys are saved in .env file from their we are accessing the keys
    we created nextAuth and provided providers as googleProvider
    it will take clientid and secret
    after that we need 2 functions session and signin
    we created both by asyncronusly as async
    after that exported handler as GET and POST
    for getting clientid and secret goes to console.cloud.google
    session means user using the web and for it we need to sign in

    {signIn}
    for sign in we are using try catch function
    when user hits any button the server gets called that means it will connect to database whenever hits
    for that we use mongoDB database.

    {database}
    imported mongoose
    set isconnected to false this will allows to track the connection to the database
    exporting connecToDB
    it is async function
    mongoose.set('strict', true);
    This sets Mongoose to strict mode, which ensures that only the fields that are specified in the schema will be saved in the database. Fields not defined in the schema will not be stored.
    This checks if the isConnected variable is true. If it is, it logs a message indicating that Mongoose is already connected and returns early from the function, avoiding multiple connections.
    using try catch for handling the error
    await mongoose.connect(process.env.MONGODB_URI, {... });
    This line uses the connect method from Mongoose to establish a connection to the MongoDB database. It uses the URI stored in the environment variable MONGODB_URI. The dbName, useNewUrlParser, and useUnifiedTopology options are specified to configure the connection.
    dbName: "share_prompt": Specifies the name of the database to connect to.
    useNewUrlParser: true: Uses the new MongoDB connection string parser.
    useUnifiedTopology: true: Uses the new unified topology engine.
    after it will change isConnected to true
    if it gets error it will pass the error

    ** adding mongodb to routes **
    in signIn we just using await connecToDB()
    now check if the user already exists in the database
    making variable userExist using await
    for finding user making a new file in models
    for making schema of email username image

    now we will find the users email in route
    if the user does not exists we will pass email username and image to profile
    it will allows to create a new user if not exist

    {session}
    using async we updating session of user. This session object represents the current user's session.
    const sessionUser = await User.findOne({email: session.user.email });
    This line uses the User model to find a user in the database with an email that matches session.user.email. The findOne method returns the first user document that matches the specified query.
    session.user.id = sessionUser._id.toString();
    If a user is found, this line adds a new id property to the session.user object and sets its value to the user's _id from the database. The _id field is a MongoDB ObjectId, which needs to be converted to a string using the toString method.
    after that changing the nav isUserLoggedin to dynamic .
    using session 