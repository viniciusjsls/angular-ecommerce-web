import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable()
export class HomeFormService {
  
  constructor() {}

  form = new FormGroup({
    search: new FormControl<string | null>(null, Validators.required),
  });
}