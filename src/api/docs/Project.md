
# Project


## Properties

Name | Type
------------ | -------------
`id` | number
`title` | string
`description` | string
`members` | [Array&lt;User&gt;](User.md)
`columns` | [Array&lt;Column&gt;](Column.md)
`createdBy` | [User](User.md)
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { Project } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "title": null,
  "description": null,
  "members": null,
  "columns": null,
  "createdBy": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies Project

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Project
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


