import { Stack, Autocomplete, TextField } from "@mui/material";
import React, { SetStateAction } from "react";
import { useState } from "react";

type Skill = {
  id: number;
  label: string;
};

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];
const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

export const MuiAutocomplete = () => {
  // const [value, setValue] = useState<string | null>(null)
  // const [skill, setSkill] = useState<Skill | null>(null)
  //console.log(skill)

  const [value, setValue] = React.useState<Skill | null>(null);
  console.log(value?.id);
  const [inputValue, setInputValue] = React.useState("");
//  console.log(inputValue);
  return (
    <Stack spacing={2} width="250px">
      {/* <Autocomplete
        options={skills}
        renderInput={params => <TextField {...params} label='Skills' />}
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue)
        }}
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={params => <TextField {...params} label='Skills' />}
        value={skill}
        onChange={(_event: any, newValue: Skill | null) => {
          setSkill(newValue)
        }}
      /> */}

      <Autocomplete
        value={value}
        onChange={(event: any, newValue: Skill | null) => {
          setValue(newValue as SetStateAction<Skill | null>);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={skillsOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />
    </Stack>
  );
};
