[shonad](../README.md) / [Exports](../modules.md) / [control](control.md) / monad

# Namespace: monad

[control](control.md).monad

## Table of contents

### Classes

- [Monad](../classes/control.monad.Monad.md)

### Type aliases

- [DoFuncReturn](control.monad.md#dofuncreturn)

### Functions

- [makeDo](control.monad.md#makedo)
- [obeysMonadLaws](control.monad.md#obeysmonadlaws)

## Type aliases

### DoFuncReturn

Ƭ **DoFuncReturn**<`T`\>: `Generator`<`T`, `any`, `T` \| `undefined`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/control/Monad.ts:66](https://github.com/jonlaing/shonad/blob/22dd501/src/control/Monad.ts#L66)

## Functions

### makeDo

▸ **makeDo**<`T`\>(`pure`, `bind`): (`f`: (`fix`: <A\>(`val`: `any`) => `A`) => [`DoFuncReturn`](control.monad.md#dofuncreturn)<`T`\>) => `T`

Makes type spcefic `do` notation for a Monad.

**`remarks`** In the final do, the generator function takes a parameter that "fixes" the
type of the `yield`. Without it, the types don't work properly, because yield defaults
to the type of the Monad, rather than the containing type.

**`example`**

export const _do = makeDo<Maybe<any>>(pure, bind);

const ma = maybe.just(1)
const mb = maybe.just(2)

_do(function* (_) {
   const a: number = _(yield ma) // forces ma to be a number
   const b: number = _(yield mb) // force mb to be a number

   return a + b
}) // maybe.just(3)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Monad`](../classes/control.monad.Monad.md)<`any`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pure` | [`Function`](base.functions.md#function)<`any`, `T`\> | the `pure` function from the Applicative interface. |
| `bind` | `Function`<[`T`, [`Function`](base.functions.md#function)<`any`, `T`\>], `T`\> | the `bind` function from the Monad interface |

#### Returns

`fn`

`do` notation function that takes a `fix` param to cast Monads into their containing type (See example)

▸ (`f`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`fix`: <A\>(`val`: `any`) => `A`) => [`DoFuncReturn`](control.monad.md#dofuncreturn)<`T`\> |

##### Returns

`T`

#### Defined in

[src/control/Monad.ts:93](https://github.com/jonlaing/shonad/blob/22dd501/src/control/Monad.ts#L93)

___

### obeysMonadLaws

▸ **obeysMonadLaws**<`T`\>(`mx`, `g`, `h`): `boolean`

Utility function meant to be used in tests to ensure your Monad obeys the monad laws

**`remarks`**

Since all Monads are Functors and Applicatives, you should also use
[obeysFunctorLaws](control.functor.md#obeysfunctorlaws) and [obeysApplicativeLaws](control.applicative.md#obeysapplicativelaws) in your tests.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Monad`](../classes/control.monad.Monad.md)<`any`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mx` | `T` | M x |
| `g` | (`a`: `any`) => `T` | x => Monad y |
| `h` | (`a`: `any`) => `T` | y => Monad z |

#### Returns

`boolean`

`true` or `false`

#### Defined in

[src/control/Monad.ts:123](https://github.com/jonlaing/shonad/blob/22dd501/src/control/Monad.ts#L123)
