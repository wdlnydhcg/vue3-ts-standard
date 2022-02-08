/*
 * @Author: MrAlenZhong
 * @Date: 2022-02-07 15:43:24
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-02-07 15:43:24
 * @Description:
 */
import { FormProps, FormSchema } from "@/components/Table";
export const getAdvanceSchema = (itemNumber = 6): FormSchema[] => {
  const arr: any = [];
  for (let index = 0; index < itemNumber; index++) {
    arr.push({
      field: `field${index}`,
      label: `字段${index}`,
      component: "Input",
      colProps: {
        xl: 12,
        xxl: 8,
      },
    });
  }
  return arr;
};
export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      ...getAdvanceSchema(15),
      {
        field: `field11`,
        label: `Slot示例`,
        component: "Select",
        slot: "custom",
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
    ],
  };
}
