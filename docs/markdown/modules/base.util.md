[shonad](../README.md) / [Exports](../modules.md) / [base](base.md) / util

# Namespace: util

[base](base.md).util

## Table of contents

### Functions

- [eq](base.util.md#eq)
- [eqBy](base.util.md#eqby)
- [isNil](base.util.md#isnil)

## Functions

### eq

▸ **eq**<`A`\>(`a`): (`b`: `A`) => `boolean`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

#### Returns

`fn`

▸ (`b`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `A` |

##### Returns

`boolean`

#### Defined in

[src/base/Util.ts:9](https://github.com/jonlaing/shonad/blob/12f6b40/src/base/Util.ts#L9)

▸ **eq**<`A`\>(`a`, `b`): `boolean`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `b` | `A` |

#### Returns

`boolean`

#### Defined in

[src/base/Util.ts:9](https://github.com/jonlaing/shonad/blob/12f6b40/src/base/Util.ts#L9)

___

### eqBy

▸ **eqBy**<`A`\>(`f`): (`a`: `A`, `b`: `A`) => `boolean`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `Function`<[`A`], `any`\> |

#### Returns

`fn`

▸ (`a`, `b`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |
| `b` | `A` |

##### Returns

`boolean`

#### Defined in

[src/base/Util.ts:20](https://github.com/jonlaing/shonad/blob/12f6b40/src/base/Util.ts#L20)

▸ **eqBy**<`A`\>(`f`, `a`): (`b`: `A`) => `boolean`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `Function`<[`A`], `any`\> |
| `a` | `A` |

#### Returns

`fn`

▸ (`b`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `A` |

##### Returns

`boolean`

#### Defined in

[src/base/Util.ts:20](https://github.com/jonlaing/shonad/blob/12f6b40/src/base/Util.ts#L20)

▸ **eqBy**<`A`\>(`f`, `a`, `b`): `boolean`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `Function`<[`A`], `any`\> |
| `a` | `A` |
| `b` | `A` |

#### Returns

`boolean`

#### Defined in

[src/base/Util.ts:20](https://github.com/jonlaing/shonad/blob/12f6b40/src/base/Util.ts#L20)

___

### isNil

▸ **isNil**(`a`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

#### Returns

`boolean`

#### Defined in

[src/base/Util.ts:4](https://github.com/jonlaing/shonad/blob/12f6b40/src/base/Util.ts#L4)
