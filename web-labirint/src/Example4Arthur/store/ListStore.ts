import { action, observable } from "mobx";
// ------------ Interface ------------
export type IList = IListItem[];

export interface IListItem {
  id: string;
  name?: string;
}
export interface IResult {
  list: IList;
  allItems: number;
}

// ------------ Store ------------
export default class ListStore {
  private static instance: ListStore;

  public static getInstance(): ListStore {
    if (!ListStore.instance) {
      ListStore.instance = new ListStore();
    }
    return ListStore.instance;
  }

  @observable loading: boolean = false;
  @action setLoading(l: boolean) {
    console.log("--()- this -", this);
    this.loading = l;
  }

  @observable list: IList = [];
  @action.bound setList(list: IList) {
    this.list = list;
  }

  @observable allItems: number = 0;
  @action setAllItems(allItems: number) {
    this.allItems = allItems;
  }

  @action async loadList() {
    this.loading = true;
    const { list, allItems } = await middlewareGenerateList(2, 10);
    this.setAllItems(allItems);
    this.setList(list);
    this.loading = false;
  }
}

// ------------ Middleware ------------
function middlewareGenerateList(page: number, count: number): Promise<IResult> {
  const list: IList = [];
  const allItems: number = 35;
  let i: number;
  for (i = 0; i < count; i++) {
    list.push(generateItem(page * 10000 + i));
  }
  const result = {
    allItems: allItems,
    list: list
  };

  return new Promise(resolve => {
    setTimeout(() => resolve(result), 1000);
  });
}

function generateItem(num: number): IListItem {
  return {
    id: "_id" + num,
    name: "Item # " + num
  };
}
