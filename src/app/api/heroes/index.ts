import { useQuery } from '@tanstack/react-query';
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