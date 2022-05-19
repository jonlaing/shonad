[shonad](../README.md) / [Exports](../modules.md) / [either](../modules/either.md) / Left

# Class: Left<A\>

[either](../modules/either.md).Left

## Type parameters

| Name |
| :------ |
| `A` |

## Hierarchy

- [`Either`](either.Either.md)<`A`, `any`\>

  ↳ **`Left`**

## Table of contents

### Constructors

- [constructor](either.Left.md#constructor)

### Properties

- [equals](either.Left.md#equals)
- [isLeft](either.Left.md#isleft)
- [isRight](either.Left.md#isright)
- [val](either.Left.md#val)
- [apply](either.Left.md#apply)
- [bind](either.Left.md#bind)
- [fmap](either.Left.md#fmap)

### Methods

- [apply](either.Left.md#apply-1)
- [bind](either.Left.md#bind-1)
- [fmap](either.Left.md#fmap-1)
- [unwrap](either.Left.md#unwrap)
- [pure](either.Left.md#pure)

## Constructors

### constructor

• **new Left**<`A`\>(`val`)

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Inherited from

[Either](either.Either.md).[constructor](either.Either.md#constructor)

#### Defined in

[src/base/Typeclass.ts:4](https://github.com/jonlaing/shonad/blob/b68ed04/src/base/Typeclass.ts#L4)

## Properties

### equals

• **equals**: (`a?`: `any`) => `boolean`

#### Type declaration

▸ (`a?`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a?` | `any` |

##### Returns

`boolean`

#### Defined in

[src/data/Either.ts:26](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/Either.ts#L26)

___

### isLeft

• **isLeft**: (`a?`: `any`) => `boolean`

#### Type declaration

▸ (`a?`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a?` | `any` |

##### Returns

`boolean`

#### Defined in

[src/data/Either.ts:18](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/Either.ts#L18)

___

### isRight

• **isRight**: (`a?`: `any`) => `boolean`

#### Type declaration

▸ (`a?`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a?` | `any` |

##### Returns

`boolean`

#### Defined in

[src/data/Either.ts:19](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/Either.ts#L19)

___

### val

• **val**: `any`

#### Inherited from

[Either](either.Either.md).[val](either.Either.md#val)

#### Defined in

[src/base/Typeclass.ts:2](https://github.com/jonlaing/shonad/blob/b68ed04/src/base/Typeclass.ts#L2)

___

### apply

▪ `Static` **apply**: [`StaticApplyFn`](../modules/applicative.md#staticapplyfn)<[`Monad`](monad.Monad.md)<`Function`<`any`, `any`\>\>, [`Monad`](monad.Monad.md)<`any`\>\>

#### Inherited from

[Either](either.Either.md).[apply](either.Either.md#apply-1)

#### Defined in

[src/control/Monad.ts:57](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Monad.ts#L57)

___

### bind

▪ `Static` **bind**: `Curry`<(`x`: [`Monad`](monad.Monad.md)<`any`\>, `f`: (`a`: `any`) => [`Monad`](monad.Monad.md)<`any`\>) => [`Monad`](monad.Monad.md)<`any`\>\>

#### Inherited from

[Either](either.Either.md).[bind](either.Either.md#bind-1)

#### Defined in

[src/control/Monad.ts:54](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Monad.ts#L54)

___

### fmap

▪ `Static` **fmap**: `Curry`<<A, B\>(`f`: (`a`: `A`) => `B`, `x`: [`Functor`](functor.Functor.md)<`A`\>) => [`Functor`](functor.Functor.md)<`any`\>\>

#### Inherited from

[Either](either.Either.md).[fmap](either.Either.md#fmap-1)

#### Defined in

[src/control/Functor.ts:5](https://github.com/jonlaing/shonad/blob/b68ed04/src/control/Functor.ts#L5)

## Methods

### apply

▸ **apply**(`ma`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ma` | [`Either`](either.Either.md)<`any`, `any`\> |

#### Returns

`this`

#### Overrides

Either.apply

#### Defined in

[src/data/Either.ts:22](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/Either.ts#L22)

___

### bind

▸ **bind**<`C`\>(`f`): [`Either`](either.Either.md)<`A`, `any`\>

#### Type parameters

| Name |
| :------ |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `any`) => [`Either`](either.Either.md)<`A`, `any`\> |

#### Returns

[`Either`](either.Either.md)<`A`, `any`\>

#### Overrides

Either.bind

#### Defined in

[src/data/Either.ts:23](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/Either.ts#L23)

___

### fmap

▸ **fmap**<`C`\>(`f`): [`Either`](either.Either.md)<`A`, `C`\>

#### Type parameters

| Name |
| :------ |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`b`: `any`) => `C` |

#### Returns

[`Either`](either.Either.md)<`A`, `C`\>

#### Overrides

Either.fmap

#### Defined in

[src/data/Either.ts:21](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/Either.ts#L21)

___

### unwrap

▸ **unwrap**(`fallback`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `any` |

#### Returns

`any`

#### Overrides

Either.unwrap

#### Defined in

[src/data/Either.ts:24](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/Either.ts#L24)

___

### pure

▸ `Static` **pure**(`a`): [`Right`](either.Right.md)<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

#### Returns

[`Right`](either.Right.md)<`unknown`\>

#### Inherited from

[Either](either.Either.md).[pure](either.Either.md#pure)

#### Defined in

[src/data/Either.ts:8](https://github.com/jonlaing/shonad/blob/b68ed04/src/data/Either.ts#L8)
