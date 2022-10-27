package DH.back_integrador.service;

import DH.back_integrador.model.Categoria;
import DH.back_integrador.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaService
{
    @Autowired
    private CategoriaRepository categoriaRepository;

    public Categoria saveCategoria(Categoria categoria){
        return categoriaRepository.save(categoria);
    }

    public Categoria getCategoria(Integer id){
        return categoriaRepository.findById(id).get();
    }

    public List<Categoria> getAllCategoria(){
        return categoriaRepository.findAll();
    }

    public void updateCategoria(Integer id, Categoria categoria){
       Categoria categoriaviejo = categoriaRepository.findById(id).get();

        categoriaviejo.setTitulo(categoria.getTitulo());
        categoriaviejo.setDescripcion(categoria.getDescripcion());
        categoriaviejo.setImagenUrl(categoria.getImagenUrl());

        categoriaRepository.save(categoriaviejo);
    }

    public void deleteCategoria(Integer id){
        categoriaRepository.deleteById(id);
    }

}
