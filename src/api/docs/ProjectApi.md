# ProjectApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createProject**](ProjectApi.md#createproject) | **POST** /projects | Create a new project |
| [**deleteProjectById**](ProjectApi.md#deleteprojectbyid) | **DELETE** /projects/{id} | Delete project by ID |
| [**getAllProjects**](ProjectApi.md#getallprojects) | **GET** /projects | Get all projects |
| [**getProjectById**](ProjectApi.md#getprojectbyid) | **GET** /projects/{id} | Get project by ID |
| [**updateProjectById**](ProjectApi.md#updateprojectbyid) | **PUT** /projects/{id} | Update project by ID |



## createProject

> ProjectResponse createProject(projectRequest)

Create a new project

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { CreateProjectRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProjectApi(config);

  const body = {
    // ProjectRequest
    projectRequest: ...,
  } satisfies CreateProjectRequest;

  try {
    const data = await api.createProject(body);
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
| **projectRequest** | [ProjectRequest](ProjectRequest.md) |  | |

### Return type

[**ProjectResponse**](ProjectResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Project created |  -  |
| **400** | Invalid project details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteProjectById

> deleteProjectById(id)

Delete project by ID

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { DeleteProjectByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProjectApi(config);

  const body = {
    // number
    id: 789,
  } satisfies DeleteProjectByIdRequest;

  try {
    const data = await api.deleteProjectById(body);
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
| **id** | `number` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Project deleted |  -  |
| **403** | Forbidden (not owner) |  -  |
| **404** | Project not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllProjects

> Array&lt;ProjectResponse&gt; getAllProjects()

Get all projects

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { GetAllProjectsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProjectApi(config);

  try {
    const data = await api.getAllProjects();
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

[**Array&lt;ProjectResponse&gt;**](ProjectResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of all projects |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjectById

> ProjectResponse getProjectById(id)

Get project by ID

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { GetProjectByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProjectApi(config);

  const body = {
    // number
    id: 789,
  } satisfies GetProjectByIdRequest;

  try {
    const data = await api.getProjectById(body);
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
| **id** | `number` |  | [Defaults to `undefined`] |

### Return type

[**ProjectResponse**](ProjectResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Project found |  -  |
| **404** | Project not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateProjectById

> ProjectResponse updateProjectById(id, projectRequest)

Update project by ID

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { UpdateProjectByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProjectApi(config);

  const body = {
    // number
    id: 789,
    // ProjectRequest
    projectRequest: ...,
  } satisfies UpdateProjectByIdRequest;

  try {
    const data = await api.updateProjectById(body);
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
| **id** | `number` |  | [Defaults to `undefined`] |
| **projectRequest** | [ProjectRequest](ProjectRequest.md) |  | |

### Return type

[**ProjectResponse**](ProjectResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Project updated |  -  |
| **400** | Invalid project details |  -  |
| **403** | Forbidden (not owner) |  -  |
| **404** | Project not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

