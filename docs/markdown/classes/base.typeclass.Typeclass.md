[shonad](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / [typeclass](../modules/base.typeclass.md) / Typeclass

# Class: Typeclass<T\>

[base](../modules/base.md).[typeclass](../modules/base.typeclass.md).Typeclass

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`Typeclass`**

  ↳ [`Functor`](control.functor.Functor.md)

## Table of contents

### Constructors

- [constructor](base.typeclass.Typeclass.md#constructor)

### Properties

- [unwrap](base.typeclass.Typeclass.md#unwrap)
- [val](base.typeclass.Typeclass.md#val)

## Constructors

### constructor

• **new Typeclass**<`T`\>(`val`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `T` |

#### Defined in

[src/base/Typeclass.ts:4](https://github.com/jonlaing/shonad/blob/12f6b40/src/base/Typeclass.ts#L4)

## Properties

### unwrap

• `Abstract` **unwrap**: (`fallback`: `T`) => `T`

#### Type declaration

▸ (`fallback`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `T` |

##### Returns

`T`

#### Defined in

[src/base/Typeclass.ts:8](https://github.com/jonlaing/shonad/blob/12f6b40/src/base/Typeclass.ts#L8)

___

### val

• **val**: `T`

#### Defined in

[src/base/Typeclass.ts:2](https://github.com/jonlaing/shonad/blob/12f6b40/src/base/Typeclass.ts#L2)
