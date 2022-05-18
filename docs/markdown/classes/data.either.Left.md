[shonad](../README.md) / [Exports](../modules.md) / [data](../modules/data.md) / [either](../modules/data.either.md) / Left

# Class: Left<A\>

[data](../modules/data.md).[either](../modules/data.either.md).Left

## Type parameters

| Name |
| :------ |
| `A` |

## Hierarchy

- [`Either`](data.either.Either.md)<`A`, `any`\>

  ↳ **`Left`**

## Table of contents

### Constructors

- [constructor](data.either.Left.md#constructor)

### Properties

- [equals](data.either.Left.md#equals)
- [isLeft](data.either.Left.md#isleft)
- [isRight](data.either.Left.md#isright)
- [val](data.either.Left.md#val)
- [apply](data.either.Left.md#apply)
- [bind](data.either.Left.md#bind)
- [fmap](data.either.Left.md#fmap)

### Methods

- [apply](data.either.Left.md#apply-1)
- [bind](data.either.Left.md#bind-1)
- [fmap](data.either.Left.md#fmap-1)
- [unwrap](data.either.Left.md#unwrap)
- [pure](data.either.Left.md#pure)

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

[Either](data.either.Either.md).[constructor](data.either.Either.md#constructor)

#### Defined in

[src/base/Typeclass.ts:4](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/base/Typeclass.ts#L4)

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

[src/data/Either.ts:22](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Either.ts#L22)

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

[src/data/Either.ts:14](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Either.ts#L14)

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

[src/data/Either.ts:15](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Either.ts#L15)

___

### val

• **val**: `any`

#### Inherited from

[Either](data.either.Either.md).[val](data.either.Either.md#val)

#### Defined in

[src/base/Typeclass.ts:2](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/base/Typeclass.ts#L2)

___

### apply

▪ `Static` **apply**: [`StaticApplyFn`](../modules/control.applicative.md#staticapplyfn)<[`Monad`](control.monad.Monad.md)<`Function`<`any`, `any`\>\>, [`Monad`](control.monad.Monad.md)<`any`\>\>

#### Inherited from

[Either](data.either.Either.md).[apply](data.either.Either.md#apply-1)

#### Defined in

[src/control/Monad.ts:57](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/control/Monad.ts#L57)

___

### bind

▪ `Static` **bind**: `Curry`<(`x`: [`Monad`](control.monad.Monad.md)<`any`\>, `f`: (`a`: `any`) => [`Monad`](control.monad.Monad.md)<`any`\>) => [`Monad`](control.monad.Monad.md)<`any`\>\>

#### Inherited from

[Either](data.either.Either.md).[bind](data.either.Either.md#bind-1)

#### Defined in

[src/control/Monad.ts:54](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/control/Monad.ts#L54)

___

### fmap

▪ `Static` **fmap**: `Curry`<<A, B\>(`f`: (`a`: `A`) => `B`, `x`: [`Functor`](control.functor.Functor.md)<`A`\>) => [`Functor`](control.functor.Functor.md)<`any`\>\>

#### Inherited from

[Either](data.either.Either.md).[fmap](data.either.Either.md#fmap-1)

#### Defined in

[src/control/Functor.ts:5](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/control/Functor.ts#L5)

## Methods

### apply

▸ **apply**(`ma`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ma` | [`Either`](data.either.Either.md)<`any`, `any`\> |

#### Returns

`this`

#### Overrides

Either.apply

#### Defined in

[src/data/Either.ts:18](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Either.ts#L18)

___

### bind

▸ **bind**<`C`\>(`f`): [`Either`](data.either.Either.md)<`A`, `any`\>

#### Type parameters

| Name |
| :------ |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `any`) => [`Either`](data.either.Either.md)<`A`, `any`\> |

#### Returns

[`Either`](data.either.Either.md)<`A`, `any`\>

#### Overrides

Either.bind

#### Defined in

[src/data/Either.ts:19](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Either.ts#L19)

___

### fmap

▸ **fmap**<`C`\>(`f`): [`Either`](data.either.Either.md)<`A`, `C`\>

#### Type parameters

| Name |
| :------ |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`b`: `any`) => `C` |

#### Returns

[`Either`](data.either.Either.md)<`A`, `C`\>

#### Overrides

Either.fmap

#### Defined in

[src/data/Either.ts:17](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Either.ts#L17)

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

[src/data/Either.ts:20](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Either.ts#L20)

___

### pure

▸ `Static` **pure**(`a`): [`Right`](data.either.Right.md)<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |

#### Returns

[`Right`](data.either.Right.md)<`unknown`\>

#### Inherited from

[Either](data.either.Either.md).[pure](data.either.Either.md#pure)

#### Defined in

[src/data/Either.ts:8](https://github.com/jonlaing/shonad/blob/1bf7d4d/src/data/Either.ts#L8)
