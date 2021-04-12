import { generateId } from "../utils/GenerateId"


class FakeDb {
    burgers = [{ name: 'Big Ass Mac', description: "Heartattck on a bun", id: generateId() }, { name: 'Collasal Club', description: "Everything but the kitchen sink", id: generateId() }]
}

export const fakeDb = new FakeDb()