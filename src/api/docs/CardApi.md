# CardApi

All URIs are relative to *http://localhost:8080/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCard**](CardApi.md#createcardoperation) | **POST** /card | Create new card |
| [**deleteCardById**](CardApi.md#deletecardbyid) | **DELETE** /card/{id} | Delete card |
| [**getCardById**](CardApi.md#getcardbyid) | **GET** /card/{id} | Get card by ID |
| [**updateCard**](CardApi.md#updatecardoperation) | **PUT** /card/{id} | Update card |



## createCard

> Card createCard(createCardRequest)

Create new card

### Example

```ts
import {
  Configuration,
  CardApi,
} from '';
import type { CreateCardOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new CardApi();

  const body = {
    // CreateCardRequest
    createCardRequest: ...,
  } satisfies CreateCardOperationRequest;

  try {
    const data = await api.createCard(body);
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
| **createCardRequest** | [CreateCardRequest](CreateCardRequest.md) |  | |

### Return type

[**Card**](Card.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Card created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **409** | Card already exists |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCardById

> deleteCardById(id)

Delete card

### Example

```ts
import {
  Configuration,
  CardApi,
} from '';
import type { DeleteCardByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new CardApi();

  const body = {
    // number
    id: 789,
  } satisfies DeleteCardByIdRequest;

  try {
    const data = await api.deleteCardById(body);
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
| **204** | Card deleted |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Card not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCardById

> Card getCardById(id)

Get card by ID

### Example

```ts
import {
  Configuration,
  CardApi,
} from '';
import type { GetCardByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new CardApi();

  const body = {
    // number
    id: 789,
  } satisfies GetCardByIdRequest;

  try {
    const data = await api.getCardById(body);
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

[**Card**](Card.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Card details |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Card not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCard

> Card updateCard(id, updateCardRequest)

Update card

### Example

```ts
import {
  Configuration,
  CardApi,
} from '';
import type { UpdateCardOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new CardApi();

  const body = {
    // number
    id: 789,
    // UpdateCardRequest
    updateCardRequest: ...,
  } satisfies UpdateCardOperationRequest;

  try {
    const data = await api.updateCard(body);
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
| **updateCardRequest** | [UpdateCardRequest](UpdateCardRequest.md) |  | |

### Return type

[**Card**](Card.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Card updated |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Card not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

