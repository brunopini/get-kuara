// Function to handle storing values and interacting with Facebook SDK
function storeValues() {
    const name = document.getElementById('name').value;
    const advertiserId = document.getElementById('advertiser_id').value;

    console.log("Stored values:", name, advertiserId);  // Log values for verification

    // Login with Facebook and request permissions
    FB.login(function(response) {
        if (response.authResponse) {
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', function(response) {
                console.log('Good to see you, ' + response.name + '.');
            });
            // Assuming you need the 'ads_management' permission to work with advertiser IDs
            FB.api(
                '/me/permissions',
                'POST',
                {
                    "permission": "ads_management",
                    "status": "granted"
                },
                function(response) {
                    // This is a basic setup; you might need to handle other scenarios and check specific permissions
                    console.log(response);
                }
            );
            // Now you might want to fetch or use the advertiser ID in further API calls
            // Here is where you would add more code to handle the advertiser ID with the Facebook API
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    }, {scope: 'ads_management,email'}); // Request permissions
}
