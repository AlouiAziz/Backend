import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';

interface Person {
  id: number;
  name: string;
}

@Controller('persons')
export class PersonController {
  private persons: Person[] = [
    { id: 0, name: 'John' },
    { id: 1, name: 'Jane' },
  ];

  // 1. Route pour retourner l'ensemble des personnes
  @Get()
  getAllPersons(): Person[] {
    return this.persons;
  }

  // 2. Route pour retourner une seule personne en fonction de l'id
  @Get(':id')
  getPersonById(@Param('id') id: number): Person {
    const person = this.persons.find(p => p.id === +id);
    if (!person) {
      return null;
    }
    return person;
  }

  // 3. Route pour ajouter une nouvelle personne
  @Post()
  addPerson(@Body() newPerson: { name: string }): Person {
    const newId = this.persons.length;
    const person = { id: newId, name: newPerson.name };
    this.persons.push(person);
    return person;
  }

  // 4. Route pour supprimer une personne en fonction de l'id
  @Delete(':id')
  deletePerson(@Param('id') id: number): string {
    const index = this.persons.findIndex(p => p.id === +id);
    if (index === -1) {
      return `Person with id ${id} not found.`;
    }
    this.persons.splice(index, 1);
    return `Person with id ${id} has been deleted.`;
  }
}

