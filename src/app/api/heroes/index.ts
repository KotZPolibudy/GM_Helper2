import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

export const useHeroesList = () => {
    return useQuery({
        queryKey: ['heroes'],
        queryFn: async () => {
          const {data, error} = await supabase.from('heroes').select('*');
          if (error) {
            throw new Error(error.message);
          }
          return data;
        },
      });
}

export const useHero = (id: number) => {
  return useQuery({
    queryKey: ['heroes', id],

    queryFn: async () => {
      const {data, error} = await supabase
      .from('heroes')
      .select('*')
      .eq('id', id)
      .single();
      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
  });
}

export const useInsertHero = () => {
const queryClient = useQueryClient();

  return useMutation({
    async mutationFn(data: any) {
      const {error, data: newHero} = await supabase.from('heroes').insert({
        name: data.name,
        image: data.image,
        level: data.level,
        backstory: data.backstory,
        class: data.class,
      })
      .single();

      if (error) {
        throw new Error(error.message);
      }
      return newHero;
    },

    async onSuccess() {
      await queryClient.invalidateQueries(['heroes']);
    },

    onError (error) {
      console.warn("Error: ", error.message)
    }


  })
}


