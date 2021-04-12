import { fakeDb } from "../db/FakeDB"
import { BadRequest } from "../utils/Errors"
import { generateId } from "../utils/GenerateId"

class BurgersService {
    delete(id) {
        let burger = fakeDb.burgers.find(e => e.id === id)
        if (!burger) {
            throw new BadRequest("Invalid Id Casting Failed");
        }
        fakeDb.burgers = fakeDb.burgers.filter(b => b.id !== id)

    }
    create(newBurger) {
        newBurger.id = generateId()
        fakeDb.burgers.push(newBurger)
        return newBurger
    }

    async find(query = {}) {
        return fakeDb.burgers;
    }

    async findById(id) {
        let burger = fakeDb.burgers.find(e => e.id === id)
        if (!burger) {
            throw new BadRequest("Invalid Id Casting Failed");
        }
        return burger;
    }

}
export const burgersService = new BurgersService();