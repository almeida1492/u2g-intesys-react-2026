# ColumnApi

All URIs are relative to *http://localhost:8080/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createColumn**](ColumnApi.md#createcolumnoperation) | **POST** /column | Create new column |
| [**deleteColumnById**](ColumnApi.md#deletecolumnbyid) | **DELETE** /column/{id} | Delete column |
| [**getAllColumns**](ColumnApi.md#getallcolumns) | **GET** /column | Get all columns |
| [**getColumnById**](ColumnApi.md#getcolumnbyid) | **GET** /column/{id} | Get column by ID |
| [**updateColumn**](ColumnApi.md#updatecolumnoperation) | **PUT** /column/{id} | Update column |



## createColumn

> ColumnResponse createColumn(createColumnRequest)

Create new column

### Example

```ts
import {
  Configuration,
  ColumnApi,
} from '';
import type { CreateColumnOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ColumnApi();

  const body = {
    // CreateColumnRequest
    createColumnRequest: ...,
  } satisfies CreateColumnOperationRequest;

  try {
    const data = await api.createColumn(body);
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
| **createColumnRequest** | [CreateColumnRequest](CreateColumnRequest.md) |  | |

### Return type

[**ColumnResponse**](ColumnResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Column created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **409** | Column already exists |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteColumnById

> deleteColumnById(id)

Delete column

### Example

```ts
import {
  Configuration,
  ColumnApi,
} from '';
import type { DeleteColumnByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ColumnApi();

  const body = {
    // number
    id: 789,
  } satisfies DeleteColumnByIdRequest;

  try {
    const data = await api.deleteColumnById(body);
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
| **204** | Column deleted |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Column not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllColumns

> Array&lt;ColumnResponse&gt; getAllColumns()

Get all columns

### Example

```ts
import {
  Configuration,
  ColumnApi,
} from '';
import type { GetAllColumnsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ColumnApi();

  try {
    const data = await api.getAllColumns();
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

[**Array&lt;ColumnResponse&gt;**](ColumnResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of columns |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getColumnById

> ColumnResponse getColumnById(id)

Get column by ID

### Example

```ts
import {
  Configuration,
  ColumnApi,
} from '';
import type { GetColumnByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ColumnApi();

  const body = {
    // number
    id: 789,
  } satisfies GetColumnByIdRequest;

  try {
    const data = await api.getColumnById(body);
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

[**ColumnResponse**](ColumnResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Column details |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Column not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateColumn

> ColumnResponse updateColumn(id, updateColumnRequest)

Update column

### Example

```ts
import {
  Configuration,
  ColumnApi,
} from '';
import type { UpdateColumnOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ColumnApi();

  const body = {
    // number
    id: 789,
    // UpdateColumnRequest
    updateColumnRequest: ...,
  } satisfies UpdateColumnOperationRequest;

  try {
    const data = await api.updateColumn(body);
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
| **updateColumnRequest** | [UpdateColumnRequest](UpdateColumnRequest.md) |  | |

### Return type

[**ColumnResponse**](ColumnResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Column updated |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Column not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

