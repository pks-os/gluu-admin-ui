# JansConfigApi.DefaultAuthenticationMethodApi

All URIs are relative to *https://jans.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAcrs**](DefaultAuthenticationMethodApi.md#getAcrs) | **GET** /jans-config-api/api/v1/acrs | Gets default authentication method.
[**putAcrs**](DefaultAuthenticationMethodApi.md#putAcrs) | **PUT** /jans-config-api/api/v1/acrs | Updates default authentication method.



## getAcrs

> AuthenticationMethod getAcrs()

Gets default authentication method.

Gets default authentication method.

### Example

```javascript
import JansConfigApi from 'jans_config_api';
let defaultClient = JansConfigApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: jans-auth
let jans-auth = defaultClient.authentications['jans-auth'];
jans-auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new JansConfigApi.DefaultAuthenticationMethodApi();
apiInstance.getAcrs((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AuthenticationMethod**](AuthenticationMethod.md)

### Authorization

[jans-auth](../README.md#jans-auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putAcrs

> AuthenticationMethod putAcrs(opts)

Updates default authentication method.

Updates default authentication method.

### Example

```javascript
import JansConfigApi from 'jans_config_api';
let defaultClient = JansConfigApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: jans-auth
let jans-auth = defaultClient.authentications['jans-auth'];
jans-auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new JansConfigApi.DefaultAuthenticationMethodApi();
let opts = {
  'authenticationMethod': new JansConfigApi.AuthenticationMethod() // AuthenticationMethod | 
};
apiInstance.putAcrs(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authenticationMethod** | [**AuthenticationMethod**](AuthenticationMethod.md)|  | [optional] 

### Return type

[**AuthenticationMethod**](AuthenticationMethod.md)

### Authorization

[jans-auth](../README.md#jans-auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

