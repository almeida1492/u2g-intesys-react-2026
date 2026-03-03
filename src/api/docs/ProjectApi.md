# ProjectApi

All URIs are relative to *http://localhost:8080/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createProject**](ProjectApi.md#createprojectoperation) | **POST** /project | Create new project |
| [**deleteProjectById**](ProjectApi.md#deleteprojectbyid) | **DELETE** /project/{id} | Delete project |
| [**getAllProjects**](ProjectApi.md#getallprojects) | **GET** /project | Get all projects |
| [**getProjectById**](ProjectApi.md#getprojectbyid) | **GET** /project/{id} | Get project by ID |
| [**updateProject**](ProjectApi.md#updateprojectoperation) | **PUT** /project/{id} | Update project |



## createProject

> ProjectResponse createProject(createProjectRequest)

Create new project

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { CreateProjectOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ProjectApi();

  const body = {
    // CreateProjectRequest
    createProjectRequest: ...,
  } satisfies CreateProjectOperationRequest;

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
| **createProjectRequest** | [CreateProjectRequest](CreateProjectRequest.md) |  | |

### Return type

[**ProjectResponse**](ProjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Project created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **409** | Project already exists |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteProjectById

> deleteProjectById(id)

Delete project

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { DeleteProjectByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ProjectApi();

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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Project deleted |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Project not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllProjects

> Array&lt;ProjectResponse&gt; getAllProjects(page, size, sort)

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
  const api = new ProjectApi();

  const body = {
    // number | Page number (optional)
    page: 56,
    // number | Page size (optional)
    size: 56,
    // string | The field to be sorted, direction (e.g.: id,desc) (optional)
    sort: sort_example,
  } satisfies GetAllProjectsRequest;

  try {
    const data = await api.getAllProjects(body);
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
| **page** | `number` | Page number | [Optional] [Defaults to `0`] |
| **size** | `number` | Page size | [Optional] [Defaults to `10`] |
| **sort** | `string` | The field to be sorted, direction (e.g.: id,desc) | [Optional] [Defaults to `&#39;title,asc&#39;`] |

### Return type

[**Array&lt;ProjectResponse&gt;**](ProjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated list of projects |  * X-Total-Count -  <br>  * X-Page-Size -  <br>  * X-Page-Number -  <br>  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal server error |  -  |

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
  const api = new ProjectApi();

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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Project details |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Project not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateProject

> ProjectResponse updateProject(id, updateProjectRequest)

Update project

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { UpdateProjectOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ProjectApi();

  const body = {
    // number
    id: 789,
    // UpdateProjectRequest
    updateProjectRequest: ...,
  } satisfies UpdateProjectOperationRequest;

  try {
    const data = await api.updateProject(body);
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
| **updateProjectRequest** | [UpdateProjectRequest](UpdateProjectRequest.md) |  | |

### Return type

[**ProjectResponse**](ProjectResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Project updated |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Project not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

