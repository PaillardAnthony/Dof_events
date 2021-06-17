import { GuildInterface } from './../interfaces/discord/guild-interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icons'
})
export class IconsPipe implements PipeTransform {

  //https://cdn.discordapp.com/icons/555424930502541343/a_cd477df2bac3bbc848b6ba8e72064c9f.png
  transform(value: string | null, arg:GuildInterface): string {
    if (value !== null) {
      return `https://cdn.discordapp.com/icons/${arg.id}/${value}.png`;
    }
    return `assets/img/icons/discord.png`;
  }

}
