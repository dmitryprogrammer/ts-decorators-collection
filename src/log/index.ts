type DescriptorOriginal = (...args: any[]) => any;

export function log<T = any>(
  logMessage?: string,
  options: { position: "prev" | "after" } = { position: "prev" }
) {
  return (
    target: T,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<DescriptorOriginal>
  ) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]): DescriptorOriginal {
      if (options.position === "prev") {
        console.log(logMessage);
      }

      const result = originalMethod.apply(this, args);

      if (options.position === "after") {
        console.log(logMessage);
      }

      return result;
    };

    return descriptor;
  };
}
