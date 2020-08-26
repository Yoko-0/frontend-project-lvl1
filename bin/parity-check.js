#!/usr/bin/env node

import { greet } from '../src/cli.js';
import game from '../src/parity-check-logic.js';

const name = greet();

game(name);
