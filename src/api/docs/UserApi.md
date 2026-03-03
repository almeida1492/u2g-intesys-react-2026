# UserApi

All URIs are relative to *http://localhost:8080/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteUserById**](UserApi.md#deleteuserbyid) | **DELETE** /user/{userId} | Delete a user by ID |
| [**me**](UserApi.md#me) | **GET** /user/me | Get current user info from JWT token |
| [**updatePassword**](UserApi.md#updatepasswordoperation) | **PUT** /update-password | Update password |
| [**updatePersonalData**](UserApi.md#updatepersonaldataoperation) | **PUT** /personal-data | Update personal data |
| [**updateUsername**](UserApi.md#updateusernameoperation) | **PUT** /user-data | Update username |



## deleteUserById

> deleteUserById(userId)

Delete a user by ID

### Example

```ts
import {
  Configuration,
  UserApi,
} from '';
import type { DeleteUserByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UserApi();

  const body = {
    // number
    userId: 789,
  } satisfies DeleteUserByIdRequest;

  try {
    const data = await api.deleteUserById(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | `number` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | User deleteById |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | User not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## me

> Me200Response me()

Get current user info from JWT token

### Example

```ts
import {
  Configuration,
  UserApi,
} from '';
import type { MeRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UserApi();

  try {
    const data = await api.me();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Me200Response**](Me200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User info returned |  -  |
| **401** | Missing or invalid token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updatePassword

> updatePassword(updatePasswordRequest)

Update password

### Example

```ts
import {
  Configuration,
  UserApi,
} from '';
import type { UpdatePasswordOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UserApi();

  const body = {
    // UpdatePasswordRequest
    updatePasswordRequest: ...,
  } satisfies UpdatePasswordOperationRequest;

  try {
    const data = await api.updatePassword(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **updatePasswordRequest** | [UpdatePasswordRequest](UpdatePasswordRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Password updated |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | User not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updatePersonalData

> UserResponse updatePersonalData(updatePersonalDataRequest)

Update personal data

### Example

```ts
import {
  Configuration,
  UserApi,
} from '';
import type { UpdatePersonalDataOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UserApi();

  const body = {
    // UpdatePersonalDataRequest
    updatePersonalDataRequest: ...,
  } satisfies UpdatePersonalDataOperationRequest;

  try {
    const data = await api.updatePersonalData(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **updatePersonalDataRequest** | [UpdatePersonalDataRequest](UpdatePersonalDataRequest.md) |  | |

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User updated |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | User not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateUsername

> UserResponse updateUsername(updateUsernameRequest)

Update username

### Example

```ts
import {
  Configuration,
  UserApi,
} from '';
import type { UpdateUsernameOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UserApi();

  const body = {
    // UpdateUsernameRequest
    updateUsernameRequest: ...,
  } satisfies UpdateUsernameOperationRequest;

  try {
    const data = await api.updateUsername(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **updateUsernameRequest** | [UpdateUsernameRequest](UpdateUsernameRequest.md) |  | |

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User updated |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **409** | Username already exists |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

