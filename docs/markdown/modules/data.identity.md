[shonad](../README.md) / [Exports](../modules.md) / [data](data.md) / identity

# Namespace: identity

[data](data.md).identity

## Table of contents

### Classes

- [Identity](../classes/data.identity.Identity.md)

### Functions

- [makeId](data.identity.md#makeid)
- [unwrap](data.identity.md#unwrap)

## Functions

### makeId

▸ **makeId**<`A`\>(`a`): [`Identity`](../classes/data.identity.Identity.md)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

#### Returns

[`Identity`](../classes/data.identity.Identity.md)<`A`\>

#### Defined in

[src/data/Identity.ts:14](https://github.com/jonlaing/shonad/blob/1b075e8/src/data/Identity.ts#L14)

___

### unwrap

▸ **unwrap**<`A`\>(`fallback`): (`c`: [`Identity`](../classes/data.identity.Identity.md)<`A`\>) => `A`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `A` |

#### Returns

`fn`

▸ (`c`): `A`

##### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Identity`](../classes/data.identity.Identity.md)<`A`\> |

##### Returns

`A`

#### Defined in

[src/data/Identity.ts:11](https://github.com/jonlaing/shonad/blob/1b075e8/src/data/Identity.ts#L11)

▸ **unwrap**<`A`\>(`fallback`, `c`): `A`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `A` |
| `c` | [`Identity`](../classes/data.identity.Identity.md)<`A`\> |

#### Returns

`A`

#### Defined in

[src/data/Identity.ts:11](https://github.com/jonlaing/shonad/blob/1b075e8/src/data/Identity.ts#L11)
