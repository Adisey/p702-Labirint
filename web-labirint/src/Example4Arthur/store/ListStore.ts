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

  @observable pageNumber: number = 0;
  private perPage: number = 10;

  @observable loading: boolean = false;
  @action setLoading(l: boolean) {
    console.log("--()- this -", this);
    this.loading = l;
  }

  @observable list: IList = [];
  @action.bound setList(list: IList) {
    this.list = list;
  }

  @observable count: number = 0;
  @action setCount(count: number) {
    this.count = count;
  }

  @action async loadList() {
    this.loading = true;
    const { list, allItems } = await middlewareGenerateList(
      this.pageNumber,
      this.perPage
    );
    this.setCount(allItems);
    this.setList(list);
    this.loading = false;
  }

  @action async nextPage() {
    this.pageNumber++;
    await this.loadList();
  }

  @action async prevPage() {
    if (this.pageNumber > 0) {
      this.pageNumber--;
    }
    await this.loadList();
  }
}

// ------------ Middleware ------------
function middlewareGenerateList(page: number, count: number): Promise<IResult> {
  const list: IList = [];
  const allItems: number = 35;
  let i: number;
  for (i = 0; i < count; i++) {
    list.push(generateItem(page * 100 + i));
  }
  const result = {
    list: list,
    allItems: allItems
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
