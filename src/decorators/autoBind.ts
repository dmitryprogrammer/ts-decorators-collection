export function autoBind(bind: any) {
  return function (target: any, methodName: string, descriptor: PropertyDescriptor) {
    if (typeof descriptor?.value === 'function') {
      return descriptor.value.apply(bind);
    }
  }
}
